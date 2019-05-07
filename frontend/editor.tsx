/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import * as THREE from "three";
import React, { Component, Fragment } from "react";
import Screenfull from "screenfull";
import {
  sly,
  Presentation,
  Step,
  Component as SlyeComponent,
  renderComponentProps
} from "@slye/core";
import { sleep } from "./util";
import { ComponentUI } from "./componentUI";

// Material-UI component.
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Fab from "@material-ui/core/Fab";

// Icons.
import WorldIcon from "@material-ui/icons/ThreeSixtySharp";
import StorylineIcon from "@material-ui/icons/FormatListNumberedSharp";
import PlayIcon from "@material-ui/icons/PlayArrowSharp";
import { MoveIcon, RotateIcon, ScaleIcon } from "./icons";

export interface EditorProps {
  presentationDescriptor: string;
}

enum EditorMode {
  WORLD,
  LOCAL,
  PLAY
}

interface EditorState {
  mode: EditorMode;
  selectedComponent: SlyeComponent;
  x: number;
  y: number;
}

export class Editor extends Component<EditorProps, EditorState> {
  state: EditorState = {
    mode: EditorMode.WORLD,
    selectedComponent: undefined,
    x: 0,
    y: 0
  };

  /**
   * A table that holds all of the open presentations.
   */
  static presentations: Map<string, Presentation> = new Map();

  /**
   * Current presentation.
   */
  private presentation: Presentation;

  /**
   * Div element that wraps the canvas.
   */
  private canvasWrapper: React.ReactElement;

  /**
   * The step that users mouse in currently pointing to.
   */
  private intersectedStep: Step;
  private intersectedComponent: SlyeComponent;

  private transformControl: THREE.TransformControls;
  private orbitControl: THREE.OrbitControls;
  private isAltDown: boolean;

  componentWillMount() {
    this.open();
  }

  /**
   * Called when the canvas wrapper element is in the DOM.
   */
  handleCanvasWrapper = (e: HTMLDivElement): void => {
    e.appendChild(this.presentation.domElement);
  };

  /**
   * Open the current presentation.
   */
  async open(): Promise<void> {
    const { presentationDescriptor } = this.props;

    if (Editor.presentations.has(presentationDescriptor)) {
      this.presentation = Editor.presentations.get(presentationDescriptor);
      return;
    }

    const w = () => window.innerWidth;
    // status bar (bottom): 24px & top bar: 32px so decrement by 56.
    const h = () => window.innerHeight - 56;

    this.presentation = new Presentation(presentationDescriptor, w(), h());

    this.transformControl = new THREE.TransformControls(
      this.presentation.camera,
      this.presentation.domElement
    );

    this.orbitControl = new THREE.OrbitControls(
      this.presentation.camera,
      this.presentation.domElement
    );

    this.transformControl.enabled = false;
    this.orbitControl.enabled = false;

    this.presentation.scene.add(this.transformControl);

    window.addEventListener(
      "resize",
      () => {
        if (this.state.mode === EditorMode.PLAY) {
          this.presentation.resize(window.innerWidth, window.innerHeight);
        } else {
          this.presentation.resize(w(), h());
        }
      },
      false
    );

    this.canvasWrapper = (
      <div
        style={{ position: "fixed", top: 32, left: 0, zIndex: -5 }}
        ref={this.handleCanvasWrapper}
      />
    );

    // Set it into the Map.
    Editor.presentations.set(presentationDescriptor, this.presentation);

    // Construct the presentation.
    const slyRes = await client.fetchSly(presentationDescriptor);
    await sly(this.presentation, slyRes.presentation);
    await sleep(500);
    this.presentation.goTo(0, 0);
    this.presentation.use(this.onAnimationFrame);

    // Render the presentation.
    const render = () => {
      this.presentation.render();
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);

    // Events.
    const dom = this.presentation.domElement;
    dom.addEventListener("mousemove", this.onMouseMove);
    dom.addEventListener("click", this.onClick);
    dom.addEventListener("dblclick", this.onDblClick);
    // Document wise events.
    document.addEventListener("keydown", this.onKeydown);
    document.addEventListener("keyup", this.onKeyup);
    document.addEventListener("touchstart", this.onTouchStart);

    // For debugging.
    (window as any).p = this.presentation;
  }

  enableTransformControl(): void {
    this.orbitControl.enabled = false;
    this.transformControl.enabled = true;
  }

  disableTransformControl(): void {
    if (this.state.mode === EditorMode.LOCAL) {
      this.orbitControl.enabled = true;
    }
    this.transformControl.enabled = false;
    this.transformControl.detach();
  }

  switchMode(mode: EditorMode): void {
    // Disable controls.
    this.transformControl.enabled = false;
    this.orbitControl.enabled = false;
    this.transformControl.detach();
    let selectedComponent = this.state.selectedComponent;

    if (mode === EditorMode.LOCAL) {
      // Make sure we're looking at the step.
      this.presentation.current(60);
      // Focus on the current step.
      // Hide everything else.
      this.presentation.focus();
      // Setup orbit control.
      const { x, y, z } = this.presentation.getCurrentStep().getPosition();
      this.orbitControl.enabled = true;
      this.orbitControl.target.set(x, y, z);
    } else {
      selectedComponent = undefined;
      this.presentation.blur();
    }

    if (mode === EditorMode.PLAY) {
      this.presentation.play();
      this.orbitControl.enabled = false;
      this.transformControl.enabled = false;
      this.transformControl.detach();
      if (Screenfull) Screenfull.request(this.presentation.domElement);
      this.presentation.resize(window.innerWidth, window.innerHeight);
    } else if (this.state.mode === EditorMode.PLAY) {
      if (Screenfull) Screenfull.exit();
    }

    this.setState({
      mode,
      selectedComponent
    });
  }

  onAnimationFrame = (frame: number): void => {};

  onMouseMove = (event: MouseEvent): void => {
    if (
      this.transformControl.enabled ||
      this.isAltDown ||
      this.state.selectedComponent
    )
      return;

    const { width, height, offsetTop } = this.presentation.domElement;
    const x = event.offsetX;
    const y = event.offsetY - offsetTop;
    const webglX = (x / width) * 2 - 1;
    const webglY = -(y / height) * 2 + 1;
    let intersected = false;

    this.presentation.updateMouse(webglX, webglY);

    if (this.state.mode === EditorMode.PLAY) {
      return;
    }

    if (this.state.mode === EditorMode.WORLD) {
      this.intersectedStep = this.presentation.raycastStep();
      intersected = !!this.intersectedStep;
    }

    if (this.state.mode === EditorMode.LOCAL) {
      this.intersectedComponent = this.presentation.raycastComponent();
      intersected = !!this.intersectedComponent;
    }

    if (intersected) {
      this.presentation.domElement.style.cursor = "pointer";
    } else {
      this.presentation.domElement.style.cursor = "auto";
    }
  };

  onClick = (event: MouseEvent): void => {
    switch (this.state.mode) {
      case EditorMode.WORLD:
        if (this.intersectedStep) {
          this.transformControl.attach(this.intersectedStep.group);
          this.enableTransformControl();
          this.presentation.domElement.style.cursor = "auto";
        } else {
          this.disableTransformControl();
        }
        break;
      case EditorMode.LOCAL:
        if (this.isAltDown || this.state.selectedComponent) break;
        if (this.intersectedComponent) {
          this.transformControl.attach(this.intersectedComponent.group);
          this.enableTransformControl();
          this.presentation.domElement.style.cursor = "auto";
        } else {
          this.disableTransformControl();
        }
        break;
    }
  };

  onDblClick = (event: MouseEvent): void => {
    switch (this.state.mode) {
      case EditorMode.WORLD:
        if (this.intersectedStep) {
          const id = this.presentation.getStepId(this.intersectedStep);
          this.presentation.goTo(id, 60);
          this.switchMode(EditorMode.LOCAL);
        }
        break;
      case EditorMode.LOCAL:
        if (this.intersectedComponent) {
          this.disableTransformControl();
          this.setState({
            selectedComponent: this.intersectedComponent,
            x: event.offsetX,
            y: event.offsetY
          });
        }
        break;
    }
  };

  onKeydown = (event: KeyboardEvent): void => {
    const { mode } = this.state;
    const { keyCode } = event;

    // Alt
    if (
      mode === EditorMode.LOCAL &&
      this.transformControl.enabled &&
      keyCode === 18
    ) {
      this.transformControl.enabled = false;
      this.orbitControl.enabled = true;
      this.isAltDown = true;
      event.preventDefault();
      return;
    }

    if (mode === EditorMode.PLAY) {
      if (
        event.keyCode === 9 ||
        (event.keyCode >= 32 && event.keyCode <= 34) ||
        (event.keyCode >= 37 && event.keyCode <= 40)
      ) {
        event.preventDefault();
        return;
      }
    }
  };

  onKeyup = (event: KeyboardEvent): void => {
    const { mode } = this.state;
    const { keyCode, ctrlKey } = event;

    // For keys: "S", "R" and "T"
    if (this.transformControl.enabled && (keyCode >= 82 && keyCode <= 84)) {
      const mode = ["rotate", "scale", "translate"][keyCode - 82];
      this.transformControl.mode = mode as any;
      event.preventDefault();
      return;
    }

    // Escape.
    if (
      mode !== EditorMode.PLAY &&
      this.transformControl.enabled &&
      keyCode === 27
    ) {
      this.disableTransformControl();
      event.preventDefault();
      return;
    }

    // Escape.
    if (
      mode === EditorMode.LOCAL &&
      this.state.selectedComponent &&
      keyCode === 27
    ) {
      // Enable orbit control.
      this.disableTransformControl();
      this.setState({ selectedComponent: undefined });
      event.preventDefault();
      return;
    }

    // Escape.
    if (mode === EditorMode.LOCAL && keyCode === 27) {
      this.switchMode(EditorMode.WORLD);
      event.preventDefault();
      return;
    }

    // Escape.
    if (mode === EditorMode.PLAY && keyCode === 27) {
      this.switchMode(EditorMode.WORLD);
      event.preventDefault();
      return;
    }

    // F5
    if (mode !== EditorMode.PLAY && keyCode === 116) {
      this.switchMode(EditorMode.PLAY);
      event.preventDefault();
      return;
    }

    // Ctrl+F should focus on the step.
    if (mode !== EditorMode.PLAY && ctrlKey && keyCode === 70) {
      if (this.intersectedStep && mode !== EditorMode.LOCAL) {
        const id = this.presentation.getStepId(this.intersectedStep);
        this.presentation.goTo(id, 60);
      } else {
        this.presentation.current(60);
      }
      event.preventDefault();
      return;
    }

    // Alt
    if (mode === EditorMode.LOCAL && this.isAltDown && keyCode === 18) {
      this.transformControl.enabled = true;
      this.orbitControl.enabled = false;
      this.isAltDown = false;
      event.preventDefault();
      return;
    }

    if (mode === EditorMode.PLAY) {
      switch (event.keyCode) {
        case 33: // pg up
        case 37: // left
        case 38: // up
          this.presentation.prev();
          event.preventDefault();
          break;
        case 9: // tab
        case 32: // space
        case 34: // pg down
        case 39: // right
        case 40: // down
          this.presentation.next();
          event.preventDefault();
          break;
      }
    }
  };

  onTouchStart = (event: TouchEvent): void => {
    const { mode } = this.state;
    if (mode === EditorMode.PLAY) {
      if (event.touches.length === 1) {
        const x = event.touches[0].clientX;
        const width = innerWidth * 0.3;
        if (x < width) {
          this.presentation.prev();
        } else if (x > innerWidth - width) {
          this.presentation.next();
        }
      }
    }
  };

  handleChange = (event: any, mode: number) => {
    switch (mode) {
      case 0:
        this.switchMode(EditorMode.WORLD);
        break;
      case 1:
        this.switchMode(EditorMode.LOCAL);
        break;
      case 2:
        this.switchMode(EditorMode.PLAY);
        break;
    }
  };

  render() {
    const { mode, selectedComponent, x, y } = this.state;

    if (selectedComponent) {
      this.disableTransformControl();
      this.orbitControl.enabled = false;
    }

    if (mode === EditorMode.PLAY) {
      return this.canvasWrapper;
    }

    return (
      <Fragment>
        {this.canvasWrapper}

        <BottomNavigation
          style={styles.buttonGroup}
          value={mode}
          onChange={this.handleChange}
        >
          <BottomNavigationAction icon={<WorldIcon />} />
          <BottomNavigationAction icon={<StorylineIcon />} />
          <BottomNavigationAction icon={<PlayIcon />} />
        </BottomNavigation>

        {selectedComponent ? (
          <ComponentUI component={selectedComponent} x={x} y={y} />
        ) : null}

        <div style={styles.transformControlButtons}>
          <Fab
            style={transformControlButton(0)}
            onClick={() => this.transformControl.setMode("translate")}
          >
            <MoveIcon />
          </Fab>
          <Fab
            style={transformControlButton(1)}
            onClick={() => this.transformControl.setMode("rotate")}
          >
            <RotateIcon />
          </Fab>
          <Fab
            style={transformControlButton(2)}
            onClick={() => this.transformControl.setMode("scale")}
          >
            <ScaleIcon />
          </Fab>
        </div>
      </Fragment>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  paper: {
    height: "calc(100vh - 56px - 65px)",
    width: "calc(100vw - 70px)",
    position: "relative",
    top: 59,
    left: 35,
    borderRadius: 15,
    opacity: 0.9,
    background: "rgba(0, 0, 0, 0)"
  },
  buttonGroup: {
    position: "fixed",
    top: 32,
    width: 300,
    left: "calc(50% - 150px)",
    borderRadius: "0 0 40px 40px"
  },
  transformControlButtons: {
    width: 300,
    height: 300,
    borderRadius: 150,
    position: "fixed",
    top: "calc(50vh - 150px + 32px)",
    border: "2px solid",
    left: -205
  }
};

const transformControlButton = (i: number): React.CSSProperties => ({
  width: 65,
  height: 65,
  position: "absolute",
  left: [205, 260, 205][i],
  top: [0, 150 - 65 / 2 - 12, 235][i]
});
