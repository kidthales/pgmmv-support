/**
 * Agtk object instance display direction move action command configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance display direction move action command configuration
 * interface.
 */
export interface AgtkDisplayDirectionMove {
  /**
   * Value true/false.
   *  - True = Specify Movement Distance
   *  - False = Infinite Movement
   */
  distanceOverride: boolean;

  /**
   * Value any whole number. Distance to move (in pixels) and only works if
   * distanceOverride is true.
   *
   * @note If you put decimals, the value will round down to the nearest whole
   * number.
   */
  moveDistance: number;

  /**
   * Value true/false.
   *  - True = Move in Reverse Direction
   *  - False = Move in Display Direction
   */
  reverse: boolean;
}
