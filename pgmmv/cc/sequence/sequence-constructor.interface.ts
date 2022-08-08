/**
 * Cocos sequence constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCActionIntervalConstructor } from '../action-interval';
import type { CCFiniteTimeAction } from '../finite-time-action';

import type { CCSequence } from './sequence.interface';

/**
 * Cocos sequence constructor interface.
 *
 * @param tempArray
 * @param actionTwo
 * @constructor
 */
export interface CCSequenceConstructor<
  T extends CCSequence = CCSequence,
  U extends any[] = [CCFiniteTimeAction | CCFiniteTimeAction[], CCFiniteTimeAction?]
> extends CCActionIntervalConstructor<T, U> {}
