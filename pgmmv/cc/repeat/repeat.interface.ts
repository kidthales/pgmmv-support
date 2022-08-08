/**
 * Cocos repeat interface module.
 *
 * @packageDocumentation
 */
import type { CCActionInterval } from '../action-interval';
import type { CCFiniteTimeAction } from '../finite-time-action';
import type { CCNode } from '../node';

/**
 * Repeats an action a number of times.
 * To repeat an action forever use the CCRepeatForever action.
 * ```
 * var rep = new cc.Repeat(cc.sequence(jump2, jump1), 5);
 * ```
 */
export interface CCRepeat extends CCActionInterval {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCRepeat;

  /**
   * Get inner Action.
   */
  getInnerAction(): CCFiniteTimeAction;

  /**
   * @param action
   * @param times
   */
  initWithAction(action: CCFiniteTimeAction, times: number): boolean;

  /**
   * Return true if the action has finished.
   */
  isDone(): boolean;

  /**
   * Returns a reversed action.
   */
  reverse(): CCRepeat;

  /**
   * Set inner Action.
   *
   * @param action
   */
  setInnerAction(action: CCFiniteTimeAction): void;

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
