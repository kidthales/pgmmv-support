/**
 * Cocos action interval constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCFiniteTimeActionConstructor } from '../finite-time-action';

import type { CCActionInterval } from './action-interval.interface';

/**
 * Cocos action interval constructor interface.
 *
 * @param d Duration in seconds.
 * @constructor
 */
export interface CCActionIntervalConstructor<T extends CCActionInterval = CCActionInterval, U extends any[] = [number?]>
  extends CCFiniteTimeActionConstructor<T, U> {
  /**
   * Please use cc.actionInterval instead. An interval action is an action that takes place within a certain period of time.
   *
   * @param d Duration in seconds.
   * @deprecated since v3.0, please use cc.actionInterval instead.
   */
  create(...args: U): T;
}
