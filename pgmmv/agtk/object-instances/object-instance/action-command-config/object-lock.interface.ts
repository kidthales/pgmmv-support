/**
 * Agtk object instance object lock action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectLock as AgtkObjectLockConstant } from '../../../constants/action-commands/object-lock';
import type { AgtkConditions } from '../../../constants/conditions';

/**
 * Agtk object lock compare variable operator type.
 *
 * @internal
 */
type AgtkCompareVariableOperator =
  | AgtkConditions['OperatorLess']
  | AgtkConditions['OperatorLessEqual']
  | AgtkConditions['OperatorEaual']
  | AgtkConditions['OperatorGreaterEqual']
  | AgtkConditions['OperatorGreater']
  | AgtkConditions['OperatorNotEqual'];

/**
 * Agtk object lock compare value type type.
 *
 * @internal
 */
type AgtkCompareValueType =
  | AgtkConditions['CompareValue']
  | AgtkConditions['CompareVariable']
  | AgtkConditions['CompareNaN'];

/**
 * Agtk object lock switch condition type.
 *
 * @internal
 */
type AgtkSwitchCondition =
  | AgtkConditions['SwitchConditionOn']
  | AgtkConditions['SwitchConditionOff']
  | AgtkConditions['SwitchConditionOnFromOff']
  | AgtkConditions['SwitchConditionOffFromOn'];

/**
 * Agtk object lock use type type.
 *
 * @internal
 */
type AgtkUseType =
  | AgtkObjectLockConstant['UseSwitch']
  | AgtkObjectLockConstant['UseVariable']
  | AgtkObjectLockConstant['UseNone'];

/**
 * Agtk object instance object lock action command configuration interface.
 */
export interface AgtkObjectLock {
  /**
   * Value True/False.
   *  - True = Only lock if wall detections are in contact with the object
   *  - False = Can lock without wall detection contact
   */
  lockTouchedObject: boolean;

  /**
   * Value True/False.
   *  - True = Only lock if the object is inside the field of vision
   *  - False = Can lock without a field of vision
   */
  lockViewportLightObject: boolean;

  /**
   * Value True/False.
   *  - True = Field of vision can apply across all layers
   *  - False = Field of vision only applies if on this objects layer
   */
  lockViewportLightOfAcrossLayerObject: boolean;

  /**
   * Value True/False.
   *  - True = Only lock if the object is inside the screen view
   *  - False = Can lock without screen view
   */
  lockObjectOnScreen: boolean;

  /**
   * Value True/False.
   *  - True = Only lock if objects are touching this objects attack detection
   *  - False = Can lock without attack detection
   */
  lockObjectTouchedByThisObjectAttack: boolean;

  /**
   * Value any whole number. If objectType is not a value of 1, this option (Set
   * by Object Group) will take priority.
   */
  objectTypeByType: number;

  /**
   * Value -1+ depending on amount of Groups. Only useable if objectType is not
   * a value of 1. NOTE: If a value doesn't exist the game won't crash but the
   * action will be null.
   *  - -1 = All Objects
   *  - 0 = Player Group
   *  - 1 = Enemy Group
   *  - 2+ = Any created groups you may have
   */
  objectGroup: number;

  /**
   * Value any whole number OR 1.
   *  - 1 = This option (Set by Object) is priority
   *  - Any other whole number = Option not selected
   */
  objectType: number;

  /**
   * Value 1+. Only useable if objectType = 1. The desired object ID will be
   * placed here, you can get object ID by right-clicking an object and clicking
   * object settings. A non existing object ID will not crash game but will null
   * action.
   */
  objectId: number;

  /**
   * Value 0-2. 'Set by Target Variable/Switch' option.
   *  - 0 = Set Switch as Condition
   *  - 1 = Set Variable as Condition
   *  - 2 = Not Set (default)
   */
  useType: AgtkUseType;

  /**
   * Only useable if useType = 0.
   *
   * **This one is difficult to use scripting as the visual script version seems
   *   to get ID by name, so you might want to get the switch by name in a temp
   *   variable (in the script) and then use that temp variable as the switchId.
   *  - -1 = None
   *  - 1-11 = Refer to the default object self switches
   *  - 2000+ = Created object self switches, see above ** for further details
   */
  switchId: number;

  /**
   * Value 0-3. Only useable if useType = 0.
   *  - 0 = On
   *  - 1 = Off
   *  - 2 = Off to On
   *  - 3 = On to Off
   */
  switchCondition: AgtkSwitchCondition;

  /**
   * Only useable if useType = 1.
   *
   * **This one is difficult to use scripting as the visual script version seems
   *   to get ID by name, so you might want to get the variable by name in a
   *   temp variable (in the script) and then use that temp variable as the
   *   variableId.
   *  - -1 = None
   *  - 1-38 = Refer to the default object self variables
   *  - 2000+ = Created object self variables, see above ** for further details
   */
  variableId: number;

  /**
   * Value 0-5. Only useable if useType = 1.
   *  - 0 = Less than <
   *  - 1 = Less than or equal to <=
   *  - 2 = Equal to =
   *  - 3 = Greater than or equal to >=
   *  - 4 = Greater than >
   *  - 5 = Not equal to !=
   */
  compareVariableOperator: AgtkCompareVariableOperator;

  /**
   * Value 0-2. Only useable if useType = 1.
   *  - 0 = Constant
   *  - 1 = Other Variables
   *  - 2 = Non-numeric
   */
  compareValueType: AgtkCompareValueType;

  /**
   *  Value any float. Only useable if compareValueType = 0.
   */
  compareValue: number;

  /**
   * Value -2+. Only useable if compareValueType = 1.
   *  - -7 = Parent Object
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Name Common
   *  - 1+ = Object ID
   */
  compareVariableObjectId: number;

  /**
   * Value -2+. Only useable if compareValueType = 1.
   *  - -2 = All
   *  - -1 = Single
   *  - 1+ = Object ID
   */
  compareVariableQualifierId: number;

  /**
   * Only useable if compareValueType = 1.
   *
   * **This one is difficult to use scripting as the visual script version seems
   *   to get ID by name, so you might want to get the variable by name in a
   *   temp variable (in the script) and then use that temp variable as the
   *   variableId.
   *  - -1 = None
   *  - 6-23 = Refer to default common variables if compareVariableObjectId = 0
   *  - 1-38 = Refer to the default object self variables if compareVariableObjectId = -2 or 1+
   *  - 2000+ = Created object self variables, see above ** for further details
   */
  compareVariableId: number;
}
