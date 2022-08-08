/**
 * Cocos GL program constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCGLProgram } from './gl-program.interface';

/**
 * Cocos GL program constructor interface.
 *
 * @param vShaderFileName
 * @param fShaderFileName
 * @param glContext
 */
export interface CCGLProgramConstructor<
  T extends CCGLProgram = CCGLProgram,
  U extends any[] = [string, string, unknown]
> extends CCClassConstructor<T, U> {
  /**
   * Create a cc.GLProgram object.
   */
  create(...args: U): T;
}
