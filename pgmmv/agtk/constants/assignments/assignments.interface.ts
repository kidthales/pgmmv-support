/**
 * Agtk assignments constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk assignments constants interface.
 */
export interface AgtkAssignments {
  /**
   * Switch assign on.
   */
  readonly SwitchAssignOn: 0;

  /**
   * Switch assign off.
   */
  readonly SwitchAssignOff: 1;

  /**
   * Switch toggle.
   */
  readonly SwitchAssignToggle: 2;

  /**
   * Variable operator set.
   */
  readonly VariableAssignOperatorSet: 0;

  /**
   * Variable operator add & set.
   */
  readonly VariableAssignOperatorAdd: 1;

  /**
   * Variable operator subtract & set.
   */
  readonly VariableAssignOperatorSub: 2;

  /**
   * Variable operator multiply & set.
   */
  readonly VariableAssignOperatorMul: 3;

  /**
   * Variable operator divide & set.
   */
  readonly VariableAssignOperatorDiv: 4;

  /**
   * Variable operator modulus & set.
   */
  readonly VariableAssignOperatorMod: 5;

  /**
   * Variable assign value.
   */
  readonly VariableAssignValue: 0;

  /**
   * Variable assign variable.
   */
  readonly VariableAssignVariable: 1;

  /**
   * Variable assign random.
   */
  readonly VariableAssignRandom: 2;

  /**
   * Variable assign script.
   */
  readonly VariableAssignScript: 3;
}
