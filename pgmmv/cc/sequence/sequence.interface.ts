/**
 * Cocos sequence interface module.
 *
 * @packageDocumentation
 */
import type { CCActionInterval } from '../action-interval';
import type { CCFiniteTimeAction } from '../finite-time-action';
import type { CCNode } from '../node';

/**
 *  Runs actions sequentially, one after another.
 * ```
 * // create sequence with actions
 * var seq = new cc.Sequence(act1, act2);
 *
 * // create sequence with array
 * var seq = new cc.Sequence(actArray);
 * ```
 */
export interface CCSequence extends CCActionInterval {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCSequence;

  /**
   * Initializes the action.
   *
   * @param actionOne
   * @param actionTwo
   */
  initWithTwoActions(actionOne: CCFiniteTimeAction, actionTwo: CCFiniteTimeAction): boolean;

  /**
   * Returns a reversed action.
   */
  reverse(): CCSequence;

  /**
   * Start the action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;

  /**
   * Stop the action.
   */
  stop(): void;

  /**
   * Called once per frame. Time is the number of seconds of a frame interval.
   *
   * @param dt
   */
  update(dt: number): void;
}
