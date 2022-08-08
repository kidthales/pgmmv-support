/**
 * Cocos action interval interface module.
 *
 * @packageDocumentation
 */
import type { CCEaseObject } from '../ease-object';
import type { CCFiniteTimeAction } from '../finite-time-action';
import type { CCNode } from '../node';

/**
 * An interval action is an action that takes place within a certain period of time.
 * It has an start time, and a finish time. The finish time is the parameter
 * duration plus the start time.
 *
 * These CCActionInterval actions have some interesting properties, like:
 * - They can run normally (default)
 * - They can run reversed with the reverse method
 * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions.
 *
 * For example, you can simulate a Ping Pong effect running the action normally and
 * then running it again in Reverse mode.
 * ```
 * var actionInterval = new cc.ActionInterval(3);
 * ```
 */
export interface CCActionInterval extends CCFiniteTimeAction {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCActionInterval;

  /**
   * Implementation of ease motion.
   * ```
   * //example
   * action.easeing(cc.easeIn(3.0));
   * ```
   *
   * @param easeObj
   */
  easing(easeObj: CCEaseObject): CCActionInterval;

  /**
   * Get amplitude rate.
   */
  getAmplitudeRate(): number;

  /**
   * How many seconds had elapsed since the actions started to run.
   */
  getElapsed(): number;

  /**
   * Get this action speed.
   */
  getSpeed(): number;

  /**
   * Initializes the action.
   *
   * @param d Duration in seconds.
   */
  initWithDuration(d: number, ...args: unknown[]): boolean;

  /**
   * Returns true if the action has finished.
   */
  isDone(): boolean;

  /**
   * Repeats an action a number of times. To repeat an action forever use the CCRepeatForever action.
   *
   * @param times
   */
  repeat(times: number): CCActionInterval;

  /**
   * Repeats an action for ever.
   * To repeat the an action for a limited number of times use the Repeat action.
   */
  repeatForever(): CCActionInterval;

  /**
   * Returns a reversed action. Will be overwritten.
   */
  reverse(): CCActionInterval;

  /**
   * Set amplitude rate.
   *
   * @param amp
   */
  setAmplitudeRate(amp: number): void;

  /**
   * Set this action speed.
   *
   * @param speed
   */
  setSpeed(speed: number): CCActionInterval;

  /**
   * Changes the speed of an action, making it take longer (speed>1) or less (speed<1) time.
   * Useful to simulate 'slow motion' or 'fast forward' effect.
   *
   * @param speed
   */
  speed(speed: number): CCActionInterval;

  /**
   * Start this action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;

  /**
   * Called every frame with it's delta time.
   * DON'T override unless you know what you are doing.
   *
   * @param dt
   */
  step(dt: number): void;
}
