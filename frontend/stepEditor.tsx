/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import React, { Component, Fragment } from "react";
import * as THREE from "three";
import * as slye from "@slye/core";

import { ComponentUI } from "./componentUI";
import { TransformControl } from "./transformControl";
import { OrbitControl } from "./orbitControl";

import Fade from "@material-ui/core/Fade";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";

import TextFieldsIcon from "@material-ui/icons/TextFields";

export interface StepEditorProps {
  presentation: slye.Presentation;
  step: slye.Step;
  exit: () => void;
}

interface StepEditorState {
  isAltDown: boolean;
  selectedComponent: slye.Component;
  transform: boolean;
  edit: boolean;
  x: number;
  y: number;
}

export class StepEditor extends Component<StepEditorProps, StepEditorState> {
  state: StepEditorState = {
    isAltDown: false,
    selectedComponent: undefined,
    transform: false,
    edit: false,
    x: 0,
    y: 0
  };

  private hoverdComponent: slye.Component;

  componentWillReceiveProps(nextProps: StepEditorProps) {
    if (nextProps.step !== this.props.step) {
      const id = this.props.presentation.getStepId(nextProps.step);
      this.props.presentation.goTo(id, 60);
    }
  }

  componentWillMount() {
    this.props.presentation.focus();
    const id = this.props.presentation.getStepId(this.props.step);
    this.props.presentation.goTo(id, 60);
    // Events.
    const { domElement } = this.props.presentation;
    domElement.addEventListener("mousemove", this.onMouseMove);
    domElement.addEventListener("click", this.onClick);
    domElement.addEventListener("dblclick", this.onDblClick);
    document.addEventListener("keydown", this.onKeydown);
    document.addEventListener("keyup", this.onKeyup);
    const background = this.props.presentation.scene.background;
    if (background instanceof THREE.Color) {
      domElement.parentElement.style.background = background.getStyle();
    } else {
      domElement.parentElement.style.background = "auto";
    }
  }

  componentWillUnmount() {
    this.props.presentation.blur();
    const { domElement } = this.props.presentation;
    domElement.style.cursor = "auto";
    domElement.removeEventListener("mousemove", this.onMouseMove);
    domElement.removeEventListener("click", this.onClick);
    domElement.removeEventListener("dblclick", this.onDblClick);
    document.removeEventListener("keydown", this.onKeydown);
    document.removeEventListener("keyup", this.onKeyup);
  }

  onMouseMove = (event: MouseEvent): void => {
    const { presentation } = this.props;
    const { domElement } = presentation;
    this.hoverdComponent = presentation.raycastComponent();
    domElement.style.cursor = this.hoverdComponent ? "pointer" : "auto";
  };

  onKeydown = (event: KeyboardEvent): void => {
    const { keyCode } = event;

    // Alt
    if (keyCode === 18) {
      this.setState({ isAltDown: true });
      event.preventDefault();
      return;
    }
  };

  onKeyup = (event: KeyboardEvent): void => {
    const { keyCode, ctrlKey } = event;

    // Ctrl+F should focus on the step.
    if (ctrlKey && keyCode === 70) {
      const id = this.props.presentation.getStepId(this.props.step);
      this.props.presentation.goTo(id, 60);
      event.preventDefault();
      return;
    }

    // Ctrl+N & Ctrl+[Right Arrow]: Go to the next step.
    if (ctrlKey && (keyCode === 78 || keyCode === 39)) {
      this.props.presentation.next();
      event.preventDefault();
      return;
    }

    // Ctrl+P & Ctrl+[Left Arrow]: Go to the previous step.
    if (ctrlKey && (keyCode === 80 || keyCode === 37)) {
      this.props.presentation.prev();
      event.preventDefault();
      return;
    }

    // Alt
    if (keyCode === 18) {
      this.setState({ isAltDown: false });
      event.preventDefault();
      return;
    }

    // Escape
    if (event.keyCode === 27) {
      if (this.state.transform) {
        this.setState({ transform: false });
      } else if (this.state.edit) {
        this.setState({ edit: false });
      } else {
        this.props.exit();
      }
      event.preventDefault();
      return;
    }

    // Delete
    if (keyCode === 46) {
      const component = this.state.selectedComponent;
      if (component) {
        this.props.presentation.actions.deleteComponent(component);
        this.setState({
          selectedComponent: undefined,
          edit: false,
          transform: false
        });
      }
    }
  };

  onClick = (event: MouseEvent): void => {
    const { transform, selectedComponent } = this.state;
    if (transform && this.hoverdComponent === selectedComponent) return;
    if (transform && !this.hoverdComponent) return;

    this.props.presentation.domElement.style.cursor = "auto";
    this.setState({
      selectedComponent: this.hoverdComponent,
      transform: !!this.hoverdComponent,
      edit: false
    });
  };

  onDblClick = (event: MouseEvent): void => {
    if (!this.hoverdComponent) return;

    this.setState({
      selectedComponent: this.hoverdComponent,
      edit: true,
      transform: false,
      x: event.offsetX,
      y: event.offsetY
    });
  };

  // TODO(qti3e)
  addComponent = async (
    moduleName: string,
    component: string
  ): Promise<void> => {
    const c = await slye.component(moduleName, component, {
      size: 10,
      font: await slye.font("slye", "Homa"),
      text: "Write..."
    });

    const { presentation, step } = this.props;
    presentation.actions.insertComponent(step, c);
  };

  render() {
    const { presentation, step } = this.props;
    const { isAltDown, edit, x, y, selectedComponent, transform } = this.state;

    return (
      <Fragment>
        {!edit && transform && (
          <TransformControl
            presentation={presentation}
            object={selectedComponent && selectedComponent.group}
            disabled={isAltDown}
          />
        )}
        {!edit && (isAltDown || !transform) ? (
          <OrbitControl presentation={presentation} center={step.group} />
        ) : null}

        {edit ? (
          <ComponentUI
            presentation={presentation}
            component={selectedComponent}
            x={x}
            y={y}
          />
        ) : null}

        <Fade in={true}>
          <List component="nav" style={styles.list}>
            <ListItem button onClick={() => this.addComponent("slye", "text")}>
              <Tooltip title="Text" placement="left">
                <ListItemIcon>
                  <TextFieldsIcon />
                </ListItemIcon>
              </Tooltip>
            </ListItem>
          </List>
        </Fade>
      </Fragment>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  list: {
    width: 60,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 32,
    background: "#fff"
  }
};
