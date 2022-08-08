/**
 * Agtk object instance object unlock action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectUnlockValue as AgtkObjectType } from '../../../constants/action-commands/object-unlock';

/**
 * Agtk object instance object unlock action command configuration interface.
 */
export interface AgtkObjectUnlock {
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
   * Value any whole number OR 0 - 1.
   *  - 0 = Set by object group.
   *  - 1 = This option (Set by Object) is priority
   *  - Any other whole number = Option not selected
   */
  objectType: AgtkObjectType;

  /**
   * Value -1 and 1+. Only useable if objectType = 1.
   *  - -1 = Not Set
   *  - 1+ = The desired object ID will be placed here, you can get object ID by
   *    right-clicking an object and clicking object settings. A non existing
   *    object ID will not crash game but will null action
   */
  objectId: number;
}
