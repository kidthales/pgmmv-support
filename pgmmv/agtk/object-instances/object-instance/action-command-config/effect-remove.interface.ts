/**
 * Agtk object instance effect remove action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkEffectRemove as AgtkEffectRemoveConstant } from '../../../constants/action-commands/effect-remove';

/**
 * Agtk effect remove targeting type type.
 *
 * @internal
 */
type AgtkTargetingType =
  | AgtkEffectRemoveConstant['TargettingByType']
  | AgtkEffectRemoveConstant['TargettingByGroup']
  | AgtkEffectRemoveConstant['TargettingById']
  | AgtkEffectRemoveConstant['TargettingSceneEffect'];

/**
 * Agtk object instance effect remove action command configuration interface.
 */
export interface AgtkEffectRemove {
  /**
   * Value -2, -1, 1+.
   *  - -2 = All Effects
   *  - -1 = Not Set
   *  - 1+ = Any effects you may have created
   */
  effectId: number;

  /**
   * Value 0, 1, 5.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   *  - 5 = Effects in the current scene
   *
   * @note Developer typo.
   */
  targettingType: AgtkTargetingType;

  /**
   * Value anything. This may be a discontinued property as I couldn't find
   * anything that this changes.
   *
   * @deprecated
   */
  targetObjectType: unknown;

  /**
   * Value -1+ depending on amount of Groups. NOTE: If a value doesn't exist the
   * game won't crash but the action will be null.
   *  - -1 = All Objects
   *  - 0 = Player Group
   *  - 1 = Enemy Group
   *  - 2+ = Any created groups you may have
   */
  targetObjectGroup: number;

  /**
   * Value -3, -2, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  targetObjectId: number;
}
