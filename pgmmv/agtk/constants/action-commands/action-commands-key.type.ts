/**
 * Agtk action commands key constants type module.
 *
 * @packageDocumentation
 */
import type { AgtkActionCommands } from './action-commands.interface';

/**
 * Agtk action commands key constants type.
 */
export type AgtkActionCommandsKey = Exclude<
  keyof AgtkActionCommands,
  | 'commandBehavior'
  | 'priorityType'
  | 'templateMove'
  | 'objectLock'
  | 'objectCreate'
  | 'objectChange'
  | 'objectMove'
  | 'objectPushPull'
  | 'attackSetting'
  | 'sceneRotateFlip'
  | 'soundPlay'
  | 'soundStop'
  | 'soundPositionRemember'
  | 'messageShow'
  | 'scrollMessageShow'
  | 'effectShow'
  | 'effectRemove'
  | 'particleShow'
  | 'particleRemove'
  | 'movieShow'
  | 'imageShow'
  | 'gameSpeedChange'
  | 'timer'
  | 'directionMove'
  | 'forthBackMoveTurn'
  | 'menuShow'
  | 'menuHide'
  | 'fileLoad'
  | 'objectUnlock'
>;
