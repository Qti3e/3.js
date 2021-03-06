/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import * as slye from "@slye/core";
import * as UI from "@slye/core/ui";
import * as THREE from "three";

export type TextProps = {
  font: slye.FontBase;
  size: number;
  text: string;
  color: number;
};

export class Text extends slye.ThreeComponent<TextProps> {
  ui: UI.UILayout<TextProps> = [
    { name: "text", widget: UI.TEXT, size: 12 },
    { name: "font", widget: UI.FONT, size: 9 },
    { name: "size", widget: UI.SIZE, size: 2 },
    { name: "color", widget: UI.COLOR, size: 1 }
  ];

  init() {}

  async render() {
    const { font, size, text, color } = this.props;
    const layout = await font.layout(text);
    const shapes = slye.generateShapes(layout, size);

    const geometry = new THREE.ExtrudeGeometry(shapes, {
      steps: 1,
      depth: 2,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelSegments: 0
    });

    const material = new THREE.MeshPhongMaterial({
      color,
      emissive: 0x4e2e11,
      flatShading: true,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);

    this.group.add(mesh);
  }
}
