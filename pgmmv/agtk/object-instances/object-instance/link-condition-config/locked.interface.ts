/**
 * Agtk object instance locked link condition configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkLockedValue as AgtkLockedObjectType } from '../../../constants/link-condition/locked';

/**
 * Agtk object instance locked link condition configuration interface.
 */
export interface AgtkLocked {
  /**
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  lockingObjectId: number;

  /**
   * Value 0 - 1.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   */
  lockedObjectType: AgtkLockedObjectType;

  /**
   * Value anything. This may be a discontinued property as I couldn't find
   * anything that this changes.
   */
  lockedObjectTypeByType: unknown;

  /**
   * Value -1+ depending on amount of Groups. Only useable if objectType is not
   * a value of 1. NOTE: If a value doesn't exist the game won't crash but the
   * action will be null.
   *  - -1 = All Objects
   *  - 0 = Player Group
   *  - 1 = Enemy Group
   *  - 2+ = Any created groups you may have
   */
  lockedObjectGroup: number;

  /**
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  lockedObjectId: number;
}
