/**
 * Cocos fade to interface module.
 *
 * @packageDocumentation
 */
import type { CCActionInterval } from '../action-interval';
import type { CCNode } from '../node';

/**
 * Fades an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from the current value to a custom one.
 * ```
 * var action = new cc.FadeTo(1.0, 0);
 * ```
 */
export interface CCFadeTo extends CCActionInterval {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeTo;

  /**
   * Initializes the action.
   *
   * @param duration Duration in seconds.
   * @param opacity
   */
  initWithDuration(duration: number, opacity: number): boolean;

  /**
   * Start this action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;

  /**
   * Called once per frame. Time is the number of seconds of a frame interval.
   *
   * @param time Time in seconds
   */
  update(time: number): void;
}
