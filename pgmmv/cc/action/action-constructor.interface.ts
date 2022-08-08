/**
 * Cocos action constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCAction } from './action.interface';

/**
 * Cocos action constructor interface.
 *
 * @constructor
 */
export interface CCActionConstructor<T extends CCAction = CCAction, U extends any[] = never>
  extends CCClassConstructor<T, U> {}
