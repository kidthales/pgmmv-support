/**
 * Cocos finite time action constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCActionConstructor } from '../action';

import type { CCFiniteTimeAction } from './finite-time-action.interface';

/**
 * Cocos finite time action constructor interface.
 *
 * @constructor
 */
export interface CCFiniteTimeActionConstructor<
  T extends CCFiniteTimeAction = CCFiniteTimeAction,
  U extends any[] = never
> extends CCActionConstructor<T, U> {}
