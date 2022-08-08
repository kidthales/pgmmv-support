/**
 * Agtk action commands template move constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands template move constants interface.
 */
export interface AgtkTemplateMove {
  /**
   * Move horizontal.
   */
  readonly MoveHorizontal: 0;

  /**
   * Move vertical.
   */
  readonly MoveVertical: 1;

  /**
   * Move bound.
   */
  readonly MoveBound: 2;

  /**
   * Move random.
   */
  readonly MoveRandom: 3;

  /**
   * Move near object.
   */
  readonly MoveNearObject: 4;

  /**
   * Move near player.
   */
  readonly MoveNearPlayer: 4;

  /**
   * Move apart near object.
   */
  readonly MoveApartNearObject: 5;

  /**
   * Move apart near player.
   */
  readonly MoveApartNearPlayer: 5;

  /**
   * Move stop.
   */
  readonly MoveStop: 6;
}
