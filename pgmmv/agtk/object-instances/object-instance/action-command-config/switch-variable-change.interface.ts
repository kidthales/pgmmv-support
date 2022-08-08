/**
 * Agtk object instance switch/variable change action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkAssignments } from '../../../constants/assignments';
import type { AgtkQualifierValue as AgtkQualifierId } from '../../../constants/qualifier';

/**
 * Agtk switch/variable change switch value type.
 *
 * @internal
 */
type AgtkSwitchValue =
  | AgtkAssignments['SwitchAssignOn']
  | AgtkAssignments['SwitchAssignOff']
  | AgtkAssignments['SwitchAssignToggle'];

/**
 * Agtk switch/variable change variable assignment operator type.
 *
 * @internal
 */
type AgtkVariableAssignmentOperator =
  | AgtkAssignments['VariableAssignOperatorSet']
  | AgtkAssignments['VariableAssignOperatorAdd']
  | AgtkAssignments['VariableAssignOperatorSub']
  | AgtkAssignments['VariableAssignOperatorMul']
  | AgtkAssignments['VariableAssignOperatorDiv']
  | AgtkAssignments['VariableAssignOperatorMod'];

/**
 * Agtk switch/variable change variable assignment value type type.
 *
 * @internal
 */
type AgtkVariableAssignValueType =
  | AgtkAssignments['VariableAssignValue']
  | AgtkAssignments['VariableAssignVariable']
  | AgtkAssignments['VariableAssignRandom']
  | AgtkAssignments['VariableAssignScript'];

/**
 * Agtk object instance switch/variable change action command configuration
 * interface.
 */
export interface AgtkSwitchVariableChange {
  /**
   * Value true/false.
   *  - True = Switch
   *  - False = Variable
   */
  swtch: boolean;

  /**
   * Value -7, -5, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  switchObjectId: number;

  /**
   * Value -2, -1.
   *  - -2 = All
   *  - -1 = Single
   */
  switchQualifierId: AgtkQualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default switch.
   */
  switchId: number;

  /**
   * Value 0 - 2.
   *  - 0 = ON
   *  - 1 = OFF
   *  - 2 = Toggle
   */
  switchValue: AgtkSwitchValue;

  /**
   * Value -7, -5, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  variableObjectId: number;

  /**
   * Value -2, -1.
   *  - -2 = All
   *  - -1 = Single
   */
  variableQualifierId: AgtkQualifierId;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  variableId: number;

  /**
   * Value 0 - 5.
   *  - 0 = Assign (=)
   *  - 1 = Add & assign (+=)
   *  - 2 = Subtract & assign (-=)
   *  - 3 = Multiply & assign (*=)
   *  - 4 = Divide & assign (/=)
   *  - 5 = Modulus & assign (%=)
   */
  variableAssignOperator: AgtkVariableAssignmentOperator;

  /**
   * Value 0 - 3.
   *  - 0 = Constant
   *  - 1 = Variables
   *  - 2 = Random
   *  - 3 = Script
   *
   * @note Do NOT specify Agtk.constants.assignments.VariableAssignScript.
   */
  variableAssignValueType: AgtkVariableAssignValueType;

  /**
   * Value any float.
   */
  assignValue: number;

  /**
   * Value -7, -2, -1, 0, 1+.
   *  - -7 = Parent
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  assignVariableObjectId: number;

  /**
   * Value -1.
   *  - -1 = Single
   */
  assignVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  assignVariableId: number;

  /**
   * Any integer.
   */
  randomMin: number;

  /**
   * Any integer.
   */
  randomMax: number;

  /**
   * @note Probably shouldn't use this.
   */
  assignScript?: string;
}
