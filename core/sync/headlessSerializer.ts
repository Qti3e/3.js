/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import { unserializers } from "./serializer/headless";
import { createSerializer } from "./common";

export const HeadlessSerializer = createSerializer(unserializers);
