/**
 * Agtk object instance template move action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkTemplateMoveValue as AgtkMoveType } from '../../../constants/action-commands/template-move/template-move-value.type';

/**
 * Agtk object instance template move action command configuration interface.
 */
export interface AgtkTemplateMove {
  /**
   * Value 0-6. NOTE: Values outside 0-6 won't crash game, but will null the
   * action.
   *  - 0 = Move Left/Right
   *  - 1 = Move Up/Down
   *  - 2 = Bound
   *  - 3 = Random
   *  - 4 = Move Towards Nearby Object
   *  - 5 = Move Away from Nearby Object
   *  - 6 = Stop
   */
  moveType: AgtkMoveType;

  /**
   * Value True/False.
   *  - True = Start Move Right
   *  - False = Start Move Left
   */
  horizontalMoveStartRight: boolean;

  /**
   * Value 0+. This is the time duration for pathing. A value of 300 = 1 second.
   */
  horizontalMoveDuration300: number;

  /**
   * Value True/False.
   *  - True = Duration is infinite (meaning it will only flip direction when
   *    hitting a wall/tile)
   *  - False = Duration is based on horizontalMoveDuration300 value
   */
  horizontalInfinite: boolean;

  /**
   * Value True/False.
   *  - True = Start Move Down
   *  - False = Start Move Up
   */
  verticalMoveStartDown: boolean;

  /**
   * Value 0+. This is the time duration for pathing. A value of 300 = 1 second.
   */
  verticalMoveDuration300: number;

  /**
   * Value True/False.
   *  - True = Duration is infinite (meaning it will only flip direction when
   *    hitting a wall/tile)
   *  - False = Duration is based on verticalMoveDuration300 value
   */
  verticalInfinite: boolean;

  /**
   * Value 0+. This is the time duration for the random movement. A value of
   * 300 = 1 second.
   */
  randomMoveDuration300: number;

  /**
   * Value 0+. This is the wait for when the next random movement will begin
   * (object is stopped during wait). A value of 300 = 1 second.
   */
  randomMoveStop300: number;

  /**
   * Value -1+ depending on amount of Groups. NOTE: If a value doesn't exist the
   * game won't crash but the action will be null.
   */
  nearObjectGroup: number;

  /**
   * Value True/False. NOTE: Seems to be tied with nearPlayerLockedPlayerPrior
   * as well, make sure they both are same value.
   *  - True = Prioritize Locked Object of Group
   *  - False = No priority
   */
  nearObjectLockedObjectPrior: boolean;

  /**
   * Value True/False. NOTE: Seems to be tied with nearObjectLockedObjectPrior
   * as well, make sure they both are same value.
   *  - True = Prioritize Locked Object of Group
   *  - False = No priority
   *
   * @deprecated Scheduled for removal.
   */
  nearPlayerLockedPlayerPrior: boolean;

  /**
   * Value -1+ depending on amount of Groups. NOTE: If a value doesn't exist the
   * game won't crash but the action will be null.
   *  - -1 = All Objects
   *  - 0 = Player Group
   *  - 1 = Enemy Group
   *  - 2+ = Any created groups you may have
   */
  apartNearObjectGroup: number;

  /**
   * Value True/False. NOTE: Seems to be tied with
   * apartNearPlayerLockedPlayerPrior as well, make sure they both are same
   * value.
   *  - True = Prioritize Locked Object of Group
   *  - False = No priority
   */
  apartNearObjectLockedObjectPrior: boolean;

  /**
   * Value True/False. NOTE: Seems to be tied with
   * apartNearObjectLockedObjectPrior as well, make sure they both are same
   * value.
   *  - True = Prioritize Locked Object of Group
   *  - False = No priority
   *
   * @deprecated Scheduled for removal.
   */
  apartNearPlayerLockedPlayerPrior: boolean;

  /**
   * Value True/False.
   *  - True = Will fall off ledges
   *  - False = Won't fall off ledges and will flip pathing
   *
   * @note Opposite of editor.
   */
  fallFromStep: boolean;

  /**
   * Value True/False.
   *  - True = Will ignore object wall detections
   *  - False = Won't ignore object wall detections
   */
  ignoreOtherObjectWallArea: boolean;

  /**
   * Value True/False.
   *  - True = Will ignore tile wall detections (recommended not affected by
   *    gravity by 100%)
   *  - False = Won't ignore tile wall detections
   */
  ignoreWall: boolean;
}
