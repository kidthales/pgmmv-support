/**
 * Agtk object instance attack area near link condition configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkAttackAttributesValue as AgtkAttributePresetId } from '../../../constants/attack-attributes';
import type { AgtkAttackAreaNear as AgtkAttackAreaNearConstant } from '../../../constants/link-condition/attack-area-near';

/**
 * Attack area near distance type type.
 *
 * @internal
 */
type AgtkDistanceType =
  | AgtkAttackAreaNearConstant['DistanceNone']
  | AgtkAttackAreaNearConstant['DistanceGreaterEqual']
  | AgtkAttackAreaNearConstant['DistanceLessEqual'];

/**
 * Attack area near object type type.
 *
 * @internal
 */
type AgtkObjectType = AgtkAttackAreaNearConstant['SetByObjectGroup'] | AgtkAttackAreaNearConstant['SetByObjectId'];

/**
 * Attack area near attribute type type.
 *
 * @internal
 */
type AgtkAttributeType =
  | AgtkAttackAreaNearConstant['AttributeNone']
  | AgtkAttackAreaNearConstant['AttributePreset']
  | AgtkAttackAreaNearConstant['AttributeValue'];

/**
 * Agtk object instance attack area near link condition configuration interface.
 */
export interface AgtkAttackAreaNear {
  /**
   * Value true/false.
   *  - True = Direction of Detected Attack: Other than Specified Direction
   *  - False = Not other than specified direction
   */
  otherDirections: boolean;

  /**
   * Value true/false.
   *  - True = This Object's Display Direction
   *  - False = Direction From This Object
   */
  objectDirection: boolean;

  /**
   * Value 0 - 990. STRONGLY RECOMMENDED to use the show log with this runtime
   * action to get exact bit value depending on the combination of angles,
   * however:
   *  - 990 = All Directions
   */
  directionBit: number;

  /**
   * Value 0 - 2.
   *  - 0 = Don't Set Distance
   *  - 1 = Set Distance: More Than Specified Distance
   *  - 2 = Set Distance: Less Than Specified Distance
   */
  distanceType: AgtkDistanceType;

  /**
   * Value any whole number.
   */
  distance: number;

  /**
   * Value 0 - 1.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   */
  objectType: AgtkObjectType;

  /**
   * Value anything. This may be a discontinued property as I couldn't find
   * anything that this changes.
   *
   * @deprecated
   */
  objectTypeByType: unknown;

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
   * Value -3, -2, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value 0-2.
   *  - 0 = Don't Set
   *  - 1 = Preset Attributes
   *  - 2 = Set by Value
   */
  attributeType: AgtkAttributeType;

  /**
   * Value 1-8.
   *  - 1 = Fire
   *  - 2 = Water
   *  - 3 = Earth
   *  - 4 = Wind
   *  - 5 = Lightning
   *  - 6 = Ice
   *  - 7 = Light
   *  - 8 = Dark
   */
  attributePresetId: AgtkAttributePresetId;

  /**
   * Value whole number.
   */
  attributeValue: number;

  /**
   * Value true/false.
   *  - True = Equal to
   *  - False = Not Equal to
   */
  attributeEqual: boolean;
}
