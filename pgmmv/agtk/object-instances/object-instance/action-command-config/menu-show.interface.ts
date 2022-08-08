/**
 * Agtk object instance menu show action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkMenuShowValue as AgtkEffectType } from '../../../constants/action-commands/menu-show';

/**
 * Agtk object instance menu show action command configuration interface.
 */
export interface AgtkMenuShow {
  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any menu scene layers you may have (1 being the far left tab)
   */
  layerId: number;

  /**
   * Value true/false.
   *  - True = Set Sequence
   *  - False = No sequence
   */
  useEffect: boolean;

  /**
   * Value -1, 0 - 3.
   *  - -1 = Not Set
   *  - 0 = Slide Up
   *  - 1 = Slide Down
   *  - 2 = Slide Left
   *  - 3 = Slide Right
   */
  effectType: AgtkEffectType;

  /**
   * Value true/false.
   *  - True = Fade-in
   *  - False = None
   */
  fadein: boolean;

  /**
   * Value 0.00+. 300 = 1 second.
   */
  duration300: number;
}
