/**
 * Agtk object instance direction move action command configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance direction move action command configuration interface.
 */
export interface AgtkDirectionMove {
  /**
   * Value 0 - 359. Common use references, but not limited too:
   *  - 0 = Up
   *  - 90 = Right
   *  - 180 = Down
   *  - 270 = Left
   */
  direction: number;

  /**
   * Value -2 or 1+. WARNING: If the value is 0 or a number outside the number
   * of directions you have in your motion, the game will crash. This is of
   * particular interest if you are using this to move another object.
   *  - -2 = Match Movement Direction
   *  - 1+ = Any directions that particular motion has available
   */
  directionId: number;

  /**
   * Value any whole number. Distance to move (in pixels) and only works if
   * moveDistanceEnabled is true.
   *
   * @note If you put decimals, the value will round down to the nearest whole
   * number.
   */
  moveDistance: number;

  /**
   * Value true/false.
   *  - True = Specify Movement Distance
   *  - False = Infinite Movement
   */
  moveDistanceEnabled: boolean;
}
