/**
 * Cocos action interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCNode } from '../node';

/**
 * Base class for cc.Action objects.
 */
export interface CCAction extends CCClass {
  /**
   * The original target of the action.
   */
  originalTarget: CCNode;

  /**
   * The tag of the action, can be used to find the action.
   */
  tag: number;

  /**
   * The target will be set with the 'startWithTarget' method. When the 'stop' method is called, target will be set to nil.
   */
  target: CCNode;

  /**
   * To copy object with deep copy. Returns a clone of action.
   */
  clone(): CCAction;

  /**
   * To copy object with deep copy.
   *
   * @deprecated since v3.0 please use .clone.
   */
  copy(): CCAction;

  /**
   * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
   */
  ctor(): void;

  /**
   * Get the original target.
   */
  getOriginalTarget(): CCNode;

  /**
   * Get tag number.
   */
  getTag(): number;

  /**
   * Get the target.
   */
  getTarget(): CCNode;

  /**
   * Return true if the action has finished.
   */
  isDone(): boolean;

  /**
   * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB.
   * This is a hack, and should be removed once JSB fixes the retain/release bug.
   */
  release(): void;

  /**
   * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB.
   * This is a hack, and should be removed once JSB fixes the retain/release bug.
   */
  retain(): void;

  /**
   * Set the original target, since target can be nil.
   * Is the target that were used to run the action.
   * Unless you are doing something complex, like cc.ActionManager, you should NOT call this method.
   * The target is 'assigned', it is not 'retained'.
   *
   * @param originalTarget
   */
  setOriginalTarget(originalTarget: CCNode): void;

  /**
   * Set tag number.
   *
   * @param tag
   */
  setTag(tag: number): void;

  /**
   * The action will modify the target properties.
   *
   * @param target
   */
  setTarget(target: CCNode): void;

  /**
   * Called before the action start. It will also set the target.
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

  /**
   * Called after the action has finished. It will set the 'target' to nil.
   * IMPORTANT: You should never call "action stop" manually. Instead, use: "target.stopAction(action);"
   */
  stop(): void;

  /**
   * Called once per frame. Time is the number of seconds of a frame interval.
   *
   * @param dt
   */
  update(dt: number): void;
}
