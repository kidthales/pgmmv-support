/**
 * Agtk action commands forth back move turn constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands forth back move turn constants interface.
 */
export interface AgtkForthBackMoveTurn {
  /**
   * Move none.
   */
  readonly MoveNone: 0;

  /**
   * Move forth.
   */
  readonly MoveForth: 1;

  /**
   * Move back.
   */
  readonly MoveBack: 2;

  /**
   * K move none.
   */
  readonly kMoveNone: 0;

  /**
   * K move forth.
   */
  readonly kMoveForth: 1;

  /**
   * K move back.
   */
  readonly kMoveBack: 2;

  /**
   * Turn none.
   */
  readonly TurnNone: 0;

  /**
   * Turn right.
   */
  readonly TurnRight: 1;

  /**
   * Turn left.
   */
  readonly TurnLeft: 2;

  /**
   * K turn none.
   */
  readonly kTurnNone: 0;

  /**
   * K turn right.
   */
  readonly kTurnRight: 1;

  /**
   * K turn left.
   */
  readonly kTurnLeft: 2;

  /**
   * According to move direction.
   */
  readonly AccordingToMoveDirection: -2;
}
