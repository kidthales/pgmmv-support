/**
 * Agtk object instance HP zero link condition configuration interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance HP zero link condition configuration interface.
 */
export interface AgtkHpZero {
  /**
   * Value -3, -2, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;
}
