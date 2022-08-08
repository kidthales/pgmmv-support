/**
 * Agtk object instance camera out of range link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance camera out of range link condition configuration
 * interface.
 */
export interface AgtkCameraOutOfRange {
  /**
   * Value -3, -2, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value true/false.
   *  - True = Set Distance
   *  - False = Don't Set Distance
   */
  distanceFlag: boolean;

  /**
   * Value whole number 0+.
   */
  distance: number;
}
