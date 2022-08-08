/**
 * Agtk object instance attack setting action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkAttackSettingValue as AgtkAttributeType } from '../../../constants/action-commands/attack-setting';
import type { AgtkAttackAttributesValue as AgtkAttributePresetId } from '../../../constants/attack-attributes';

/**
 * Agtk object instance attack setting action command configuration interface.
 */
export interface AgtkAttackSetting {
  /**
   * Value any integer.
   */
  attackChange: number;

  /**
   * Value true/false.
   *  - True = Change Object Groups Settings for Attack Detection
   *  - False = Don't change
   */
  hitObjectFlag: boolean;

  /**
   * Value true/false.
   *  - True = Player Group is selected on Object Group Settings
   *  - False = Not selected
   */
  playerAttackArea: boolean;

  /**
   * Value true/false.
   *  - True = Enemy Group is selected on Object Group Settings
   *  - False = Not selected
   */
  enemyAttackArea: boolean;

  /**
   * Value whole numbers. STRONGLY recommend not using script for this option,
   * seems to based off the bit pattern the Groups are stored in.
   *
   * The 1-left shift number of the targetgroup’s index value.
   * Use a logical OR to allow multiple groups.
   * For example, to allow the objectGroupBit: number; player and enemy groups
   * to tileAttackArea: boolean; be affected, the code is
   * (1 << Agtk.constants.objectGoup.ObjectGroupPlayer) | (1 << Agtk.constants.objectGroup.ObjectGroupEnemy).
   */
  objectGroupBit: number;

  /**
   * Value true/false.
   *  - True = Tile Group Settings for Attack Detection
   *  - False = Don't change
   */
  hitTileFlag: boolean;

  /**
   * Value true/false.
   *  - True = Default Tile Group is selected
   *  - False = Not selected
   */
  tileAttackArea: boolean;

  /**
   * Value whole numbers. STRONGLY recommend not using script for this option,
   * seems to based off the bit pattern the Groups are stored in.
   */
  tileGroupBit: number;

  /**
   * Value 0-2.
   *  - 0 = Don't Set
   *  - 1 = Preset Attributes
   *  - 2 = Assign Constant to Attribute Variable
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
}
