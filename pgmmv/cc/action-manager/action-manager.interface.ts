/**
 * Cocos action manager interface module.
 *
 * @packageDocumentation
 */
import type { CCAction } from '../action';
import type { CCClass } from '../class';
import type { CCNode } from '../node';

/**
 *  cc.ActionManager is a class that can manage actions.
 * Normally you won't need to use this class directly.
 * 99% of the cases you will use the CCNode interface, which uses this class's singleton object.
 * But there are some cases where you might need to use this class.
 * Examples:
 *  - When you want to run an action where the target is different from a CCNode.
 *  - When you want to pause / resume the actions
 *
 * ```
 * var mng = new cc.ActionManager();
 * ```
 */
export interface CCActionManager extends CCClass {
  /**
   * Adds an action with a target. If the target is already present, then the action will be added to the existing target.
   * If the target is not present, a new instance of this target will be created either paused or not, and the action will
   * be added to the newly created target. When the target is paused, the queued actions won't be 'ticked'.
   *
   * @param action
   * @param target
   * @param paused
   */
  addAction(action: CCAction, target: CCNode, paused: boolean): void;

  /**
   * Gets an action given its tag an a target.
   *
   * @param tag
   * @param target
   */
  getActionByTag(tag: number, target: Record<string, unknown>): CCAction | null;

  /**
   * Returns the numbers of actions that are running in a certain target.
   * Composable actions are counted as 1 action.
   * Example:
   *  - If you are running 1 Sequence of 7 actions, it will return 1.
   *  - If you are running 7 Sequences of 2 actions, it will return 7.
   *
   * @param target
   */
  numberOfRunningActionsInTarget(target: Record<string, unknown>): number;

  /**
   * Pauses all running actions, returning a list of targets whose actions were paused.
   */
  pauseAllRunningActions(): Record<string, unknown>[];

  /**
   * Pauses the target: all running actions and newly added actions will be paused.
   *
   * @param target
   */
  pauseTarget(target: Record<string, unknown>): void;

  /**
   * Purges the shared action manager. It releases the retained instance.
   * Because it uses this, so it can not be static.
   */
  purgeSharedManager(): void;

  /**
   * Removes an action given an action reference.
   *
   * @param action
   */
  removeAction(action: CCAction): void;

  /**
   * Removes an action given its tag and the target.
   *
   * @param tag
   * @param target
   */
  removeActionByTag(tag: number, target: Record<string, unknown>): void;

  /**
   * Removes all actions from all the targets.
   */
  removeAllActions(): void;

  /**
   * Removes all actions from a certain target.
   * All the actions that belongs to the target will be removed.
   *
   * @param target
   * @param forceDelete
   */
  removeAllActionsFromTarget(target: Record<string, unknown>, forceDelete: boolean): void;

  /**
   * Resumes the target. All queued actions will be resumed.
   *
   * @param target
   */
  resumeTarget(target: Record<string, unknown>): void;

  /**
   * Resume a set of targets (convenience function to reverse a pauseAllRunningActions call).
   *
   * @param targetsToResume
   */
  resumeTargets(targetsToResume: Record<string, unknown>[]): void;

  /**
   * @param dt Delta time in seconds.
   */
  update(dt: number): void;
}
