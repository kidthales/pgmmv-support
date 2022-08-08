/**
 * Agtk object instance object found link condition configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectFoundValue as AgtkObjectType } from '../../../constants/link-condition/object-found';

/**
 * Agtk object instance object found link condition configuration interface.
 */
export interface AgtkObjectFound {
  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Field of Visions as you have created
   */
  viewportId: number;

  /**
   * Value true/false.
   *  - True = Target All Layers
   *  - False = Target objects current layer only
   */
  discoveredAcrossLayersObject: boolean;

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
