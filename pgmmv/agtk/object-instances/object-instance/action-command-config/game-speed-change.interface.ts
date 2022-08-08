/**
 * Agtk object instance game speed change action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkGameSpeedChangeValue as AgtkTargetingType } from '../../../constants/action-commands/game-speed-change';
import type { AgtkQualifierValue as AgtkTargetQualifierId } from '../../../constants/qualifier';

/**
 * Agtk object instance game speed change action command configuration
 * interface.
 */
export interface AgtkGameSpeedChange {
  /**
   * Value 0+.
   */
  gameSpeed: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = No Time Limit
   *  - False = Limited by time set in duration300
   */
  durationUnlimited: boolean;

  /**
   * Value true/false.
   *  - True = Objects
   *  - False = No objects
   */
  targetObject: boolean;

  /**
   * Value true/false.
   *  - True = Effects
   *  - False = No effects
   */
  targetEffect: boolean;

  /**
   * Value true/false.
   *  - True = Tiles
   *  - False = No tiles
   */
  targetTile: boolean;

  /**
   * Value true/false.
   *  - True = Menu Related
   *  - False = No menus
   */
  targetMenu: boolean;

  /**
   * Value 0-3.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   *  - 2 = Objects Touching This Object (STRONGLY recommend not using script
   *    for this option)
   *  - 3 = Objects Locked by This Object
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

  /**
   * Value -2, -1.
   *  - -2 = All
   *  - -1 = Single
   */
  targetQualifierId: AgtkTargetQualifierId;

  /**
   * Value true/false.
   *  - True = Player Group is selected
   *  - False = Not selected
   */
  excludePlayerObject: boolean;

  /**
   * Value true/false.
   *  - True = Enemy Group is selected
   *  - False = Not selected
   */
  excludeEnemyObject: boolean;

  /**
   * Value whole numbers. STRONGLY recommend not using script for this option,
   * seems to based off the bit pattern the Groups are stored in.
   */
  excludeObjectGroupBit: number;
}
