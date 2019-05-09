/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import { FontBase, Glyph } from "../base";

export class HeadlessFont implements FontBase {
  constructor(readonly moduleName: string, readonly name: string) {}

  async layout(text: string): Promise<Glyph[]> {
    throw new Error("`layout` is not implemented for headless fonts");
    return [];
  }
}