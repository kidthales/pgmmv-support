/**
 * Agtk conditions constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk conditions constants interface.
 */
export interface AgtkConditions {
  /**
   * Switch condition on.
   */
  readonly SwitchConditionOn: 0;

  /**
   * Switch condition off.
   */
  readonly SwitchConditionOff: 1;

  /**
   * Switch condition on from off.
   */
  readonly SwitchConditionOnFromOff: 2;

  /**
   * Switch condition off from on.
   */
  readonly SwitchConditionOffFromOn: 3;

  /**
   * Operator less than.
   */
  readonly OperatorLess: 0;

  /**
   * Operator less than or equal to.
   */
  readonly OperatorLessEqual: 1;

  /**
   * Operator equal to.
   *
   * @note Developer typo.
   */
  readonly OperatorEaual: 2;

  /**
   * Operator greater than or equal to.
   */
  readonly OperatorGreaterEqual: 3;

  /**
   * Operator greater than.
   */
  readonly OperatorGreater: 4;

  /**
   * Operator not equal to.
   */
  readonly OperatorNotEqual: 5;

  /**
   * Compare with value.
   */
  readonly CompareValue: 0;

  /**
   * Compare with variable.
   */
  readonly CompareVariable: 1;

  /**
   * Compare with non-numeric.
   */
  readonly CompareNaN: 2;
}
