/**
 * Cocos finite time action interface module.
 *
 * @packageDocumentation
 */
import type { CCAction } from '../action';

/**
 * Base class actions that do have a finite time duration.
 * Possible actions:
 * - An action with a duration of 0 seconds.
 * - An action with a duration of 35.5 seconds.
 *
 * Infinite time actions are valid.
 */
export interface CCFiniteTimeAction extends CCAction {
  /**
   * To copy object with deep copy. returns a clone of action.
   */
  clone(): CCFiniteTimeAction;

  /**
   * Get duration of the action. (seconds).
   */
  getDuration(): number;

  /**
   * Returns a reversed action.
   * For example:
   * - The action will be x coordinates of 0 move to 100.
   * - The reversed action will be x of 100 move to 0.
   * - Will be rewritten.
   */
  reverse(): CCFiniteTimeAction;

  /**
   * Set duration of the action. (seconds).
   *
   * @param duration
   */
  setDuration(duration: number): void;
}
