/**
 * Agtk object instance forth/back/move/turn action command configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkForthBackMoveTurn as AgtkForthBackMoveTurnConstant } from '../../../constants/action-commands/forth-back-move-turn';

/**
 * Agtk forth/back/move/turn move type type.
 *
 * @internal
 */
type AgtkMoveType =
  | AgtkForthBackMoveTurnConstant['MoveNone']
  | AgtkForthBackMoveTurnConstant['MoveForth']
  | AgtkForthBackMoveTurnConstant['MoveBack'];

/**
 * Agtk forth/back/move/turn turn type type.
 *
 * @internal
 */
type AgtkTurnType =
  | AgtkForthBackMoveTurnConstant['TurnNone']
  | AgtkForthBackMoveTurnConstant['TurnRight']
  | AgtkForthBackMoveTurnConstant['TurnLeft'];

/**
 * Agtk object instance forth/back/move/turn action command configuration
 * interface.
 */
export interface AgtkForthBackMoveTurn {
  /**
   * Value 0-2. NOTE: Any values outside 0-2 won't crash game but will null the
   * action.
   *  - 0 = None
   *  - 1 = Move Forward
   *  - 2 = Move Backward
   */
  moveType: AgtkMoveType;

  /**
   * Value 0-2. NOTE: Any values outside 0-2 won't crash game but will null the
   * action.
   *  - 0 = None
   *  - 1 = Turn Right
   *  - 2 = Turn Left
   */
  turnType: AgtkTurnType;

  /**
   * This is the direction the object will face while moving.
   * Anything < 0 (ie -1, -2, etc) will result in 'Match Movement Direction'.
   * Anything above 0 (ie 1, 2, etc) will represent the directions that
   * particular motion has available.
   *
   * @note If value for direction doesn't exist in the motion, the game won't
   * crash, but the animation will be null.
   */
  directionId: number;
}
