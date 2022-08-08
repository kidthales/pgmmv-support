/**
 * Agtk object instance object wall touched link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectWallTouchedValue as AgtkObjectType } from '../../../constants/link-condition/object-wall-touched';

/**
 * Agtk object instance object wall touched link condition configuration
 * interface.
 */
export interface AgtkObjectWallTouched {
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
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;
}
