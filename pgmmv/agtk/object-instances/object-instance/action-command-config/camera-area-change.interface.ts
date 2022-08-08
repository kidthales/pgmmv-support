/**
 * Agtk object instance camera area change action command configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance camera area change action command configuration
 * interface.
 */
export interface AgtkCameraAreaChange {
  /**
   * Value float, some examples (but not limited too):
   *  - 0.5 = 50%
   *  - 1.5 = 150%
   *  - 2 = 200%
   */
  xRate: number;

  /**
   * Value float, see above examples.
   */
  yRate: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;
}
