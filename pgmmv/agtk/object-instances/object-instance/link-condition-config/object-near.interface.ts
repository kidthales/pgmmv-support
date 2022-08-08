/**
 * Agtk object instance object near link condition configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectNear as AgtkObjectNearConstant } from '../../../constants/link-condition/object-near';

/**
 * Agtk object near distance type type.
 *
 * @internal
 */
type AgtkDistanceType =
  | AgtkObjectNearConstant['DistanceNone']
  | AgtkObjectNearConstant['DistanceGreaterEqual']
  | AgtkObjectNearConstant['DistanceLessEqual'];

/**
 * Agtk object near object type type.
 *
 * @internal
 */
type AgtkObjectType = AgtkObjectNearConstant['SetByObjectGroup'] | AgtkObjectNearConstant['SetByObjectId'];

/**
 * Agtk object instance object near link condition configuration interface.
 */
export interface AgtkObjectNear {
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
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;
}
