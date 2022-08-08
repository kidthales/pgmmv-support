/**
 * Agtk object instance object facing direction link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectFacingDirectionValue as AgtkObjectType } from '../../../constants/link-condition/object-facing-direction';

/**
 * Agtk object instance object facing direction link condition configuration
 * interface.
 */
export interface AgtkObjectFacingDirection {
  /**
   * Value true/false.
   *  - True = Orientation of Other Objects: Other than Specified Direction
   *  - False = Not other than specified direction
   */
  otherDirections: boolean;

  /**
   * Value true/false.
   *  - True = Same Orientation as This Object
   *  - False = Specific Direction
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
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;
}
