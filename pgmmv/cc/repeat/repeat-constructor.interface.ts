/**
 * Cocos repeat constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCActionIntervalConstructor } from '../action-interval';
import type { CCFiniteTimeAction } from '../finite-time-action';

import type { CCRepeat } from './repeat.interface';

/**
 * Cocos repeat constructor interface.
 *
 * @param action
 * @param times
 * @constructor
 */
export interface CCRepeatConstructor<T extends CCRepeat = CCRepeat, U extends any[] = [CCFiniteTimeAction?, number?]>
  extends CCActionIntervalConstructor<T, U> {}
