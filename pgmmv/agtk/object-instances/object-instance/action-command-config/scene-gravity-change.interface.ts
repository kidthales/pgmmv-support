/**
 * Agtk object instance scene gravity change action command configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance scene gravity change action command configuration interface.
 */
export interface AgtkSceneGravityChange {
  /**
   * Value 0.00+. Percentage of gravity.
   */
  gravity: number;

  /**
   * Value floats. Common use references, but not limited too:
   *  - 0 = Up
   *  - 90 = Right
   *  - 180 = Down
   *  - 270 = Left
   */
  direction: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = No Time Limit
   *  - False = Time limited to duration300 property
   */
  durationUnlimited: boolean;
}
