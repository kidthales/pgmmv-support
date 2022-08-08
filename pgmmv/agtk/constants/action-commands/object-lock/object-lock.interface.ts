/**
 * Agtk action commands object lock constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands object lock constants interface.
 */
export interface AgtkObjectLock {
  /**
   * Set by object group.
   */
  readonly SetByObjectGroup: 0;

  /**
   * Set by object.
   */
  readonly SetByObject: 1;

  /**
   * Use switch.
   */
  readonly UseSwitch: 0;

  /**
   * Use variable.
   */
  readonly UseVariable: 1;

  /**
   * Use none.
   */
  readonly UseNone: 2;

  /**
   * Compare with constant.
   */
  readonly CompareValueConstant: 0;

  /**
   * Compare with variable.
   */
  readonly CompareValueOtherVariable: 1;

  /**
   * Compare with non-numeric.
   */
  readonly CompareValueNonNumeric: 2;
}
