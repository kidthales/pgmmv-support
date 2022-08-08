/**
 * Agtk object instance file load action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkFileLoadValue as AgtkEffectType } from '../../../constants/action-commands/file-load';

/**
 * Agtk object instance file load action command configuration interface.
 */
export interface AgtkFileLoad {
  /**
   * Value true/false.
   *  - True = Project Common Variables
   *  - False = Don't include
   */
  projectCommonVariables: boolean;

  /**
   * Value true/false.
   *  - True = Project Common Switches
   *  - False = Don't include
   */
  projectCommonSwitches: boolean;

  /**
   * Value true/false.
   *  - True = Scene at time of Save
   *  - False = Don't include
   */
  sceneAtTimeOfSave: boolean;

  /**
   * Value true/false.
   *  - True = Objects States in Scene at time of Save
   *  - False = Don't include
   */
  objectsStatesInSceneAtTimeOfSave: boolean;

  /**
   * Value -1, 0 - 5.
   *  - -1 = Not Set
   *  - 0 = Black
   *  - 1 = White
   *  - 2 = Slide Up
   *  - 3 = Slide Down
   *  - 4 = Slide Left
   *  - 5 = Slide Right
   */
  effectType: AgtkEffectType;

  /**
   * Value 0.00+. 300 = 1 second.
   */
  duration300: number;
}
