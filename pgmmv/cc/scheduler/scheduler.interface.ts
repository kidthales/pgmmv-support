/**
 * Cocos scheduler interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';

/**
 * Scheduler is responsible of triggering the scheduled callbacks.
 * You should not use NSTimer. Instead use this class.
 *
 * There are 2 different types of callbacks (selectors):
 *  - update callback: the 'update' callback will be called every frame. You can customize the priority.
 *  - custom callback: A custom callback will be called every frame, or with a custom interval of time
 *
 * The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'.
 *
 * ```
 * // register a schedule to scheduler
 * cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);
 * ```
 */
export interface CCScheduler extends CCClass {
  /**
   * Returns time scale of scheduler.
   */
  getTimeScale(): number;

  /**
   * Returns whether or not the target is paused.
   *
   * @param target
   */
  isTargetPaused(target: CCClass): boolean;

  /**
   * Pause all selectors from all targets.
   * You should NEVER call this method, unless you know what you are doing.
   */
  pauseAllTargets(): void;

  /**
   * Pause all selectors from all targets with a minimum priority.
   * You should only call this with kCCPriorityNonSystemMin or higher.
   *
   * @param minPriority
   */
  pauseAllTargetsWithMinPriority(minPriority: number): void;

  /**
   * Pauses the target.
   * All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.
   * If the target is not present, nothing happens.
   *
   * @param target
   */
  pauseTarget(target: CCClass): void;

  /**
   * Resumes the target.
   * The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.
   * If the target is not present, nothing happens.
   *
   * @param target
   */
  resumeTarget(target: CCClass): void;

  /**
   * Resume selectors on a set of targets.
   * This can be useful for undoing a call to pauseAllCallbacks.
   *
   * @param targetsToResume
   */
  resumeTargets(targetsToResume: CCClass[]): void;

  /**
   * The scheduled method will be called every 'interval' seconds.
   * If paused is YES, then it won't be called until it is resumed.
   * If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.
   * If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.
   * repeat let the action be repeated repeat + 1 times, use cc.REPEAT_FOREVER to let the action run continuously
   * delay is the amount of time the action will wait before it'll start
   *
   * ```
   * // register a schedule to scheduler
   * cc.director.getScheduler().scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning );
   * ```
   *
   * @param target
   * @param callback_fn
   * @param interval
   * @param repeat
   * @param delay
   * @param paused
   * @deprecated since v3.4 please use .schedule
   */
  scheduleCallbackForTarget(
    target: CCClass,
    // eslint-disable-next-line @typescript-eslint/ban-types
    callback_fn: Function,
    interval: number,
    repeat: number,
    delay: number,
    paused: boolean
  ): void;

  /**
   * Schedules the 'update' callback_fn for a given target with a given priority.
   * The 'update' callback_fn will be called every frame.
   * The lower the priority, the earlier it is called.
   *
   * ```
   * // register this object to scheduler
   * cc.director.getScheduler().scheduleUpdateForTarget(this, priority, !this._isRunning );
   * ```
   *
   * @param target
   * @param priority
   * @param paused
   * @deprecated since v3.4 please use .scheduleUpdate
   */
  scheduleUpdateForTarget(target: CCClass, priority: number, paused: boolean): void;

  /**
   * Modifies the time of all scheduled callbacks.
   * You can use this property to create a 'slow motion' or 'fast forward' effect.
   * Default is 1.0. To create a 'slow motion' effect, use values below 1.0.
   * To create a 'fast forward' effect, use values higher than 1.0.
   *
   * @param timeScale
   */
  setTimeScale(timeScale: number): void;

  /**
   * Unschedules all function callbacks from all targets.
   * You should NEVER call this method, unless you know what you are doing.
   *
   * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
   */
  unscheduleAllCallbacks(): void;

  /**
   * Unschedules all function callbacks for a given target.
   * This also includes the "update" callback function.
   *
   * @param target
   * @deprecated since v3.4 please use .unscheduleAll
   */
  unscheduleAllCallbacksForTarget(target: CCClass): void;

  /**
   * Unschedules all function callbacks from all targets with a minimum priority.
   * You should only call this with kCCPriorityNonSystemMin or higher.
   *
   * @param minPriority
   * @deprecated since v3.4 please use .unscheduleAllWithMinPriority
   */
  unscheduleAllCallbacksWithMinPriority(minPriority: number): void;

  /**
   * Unschedule a callback function for a given target.
   * If you want to unschedule the "update", use unscheudleUpdateForTarget.
   *
   * ```
   * //unschedule a callback of target
   * cc.director.getScheduler().unscheduleCallbackForTarget(function, this);
   * ```
   *
   * @param target
   * @param callback callback[Function] or key[String]
   * @deprecated since v3.4 please use .unschedule
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  unscheduleCallbackForTarget(target: CCClass, callback: Function | string): void;

  /**
   * Unschedules the update callback function for a given target
   *
   * ```
   * //unschedules the "update" method.
   * cc.director.getScheduler().unscheduleUpdateForTarget(this);
   * ```
   *
   * @param target
   * @deprecated since v3.4 please use .unschedule
   */
  unscheduleUpdateForTarget(target: CCClass): void;

  /**
   * 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
   *
   * @param dt Delta time.
   */
  update(dt: number): void;
}
