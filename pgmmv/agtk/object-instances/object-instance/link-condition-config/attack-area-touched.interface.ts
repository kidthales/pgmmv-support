/**
 * Agtk object instance attack area touched link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkAttackAreaTouched as AgtkAttackAreaTouchedConstant } from '../../../constants/link-condition/attack-area-touched';
import type { AgtkAttackAttributesValue as AgtkAttributePresetId } from '../../../constants/attack-attributes';

/**
 * Agtk attack area touched object type type.
 *
 * @internal
 */
type AgtkObjectType =
  | AgtkAttackAreaTouchedConstant['SetByObjectGroup']
  | AgtkAttackAreaTouchedConstant['SetByObjectId'];

/**
 * Agtk attack area touched attribute type type.
 *
 * @internal
 */
type AgtkAttributeType =
  | AgtkAttackAreaTouchedConstant['AttributeNone']
  | AgtkAttackAreaTouchedConstant['AttributePreset']
  | AgtkAttackAreaTouchedConstant['AttributeValue'];

/**
 * Agtk object instance attack area touched link condition configuration interface.
 */
export interface AgtkAttackAreaTouched {
  /**
   * Value 0 - 15.
   *  - 0 = No wall sides selected
   *  - 1 = Top
   *  - 2 = Left
   *  - 3 = Left, Top
   *  - 4 = Right
   *  - 5 = Top, Right
   *  - 6 = Left, Right
   *  - 7 = Left, Top, Right
   *  - 8 = Bottom
   *  - 9 = Top, Bottom
   *  - 10 = Left, Bottom
   *  - 11 = Left, Top, Bottom
   *  - 12 = Right, Bottom
   *  - 13 = Top, Right, Bottom
   *  - 14 = Left, Bottom, Right
   *  - 15 = All wall sides selected
   */
  wallBit: number;

  /**
   * Value 0 - 1.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   */
  objectType: AgtkObjectType;

  /**
   * Value anything. This may be a discontinued property as I couldn't find
   * anything that this changes.
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
