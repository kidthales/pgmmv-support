/**
 * Agtk object instance sound position remember action command configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSoundPositionRememberValue as AgtkSoundType } from '../../../constants/action-commands/sound-position-remember';

/**
 * Agtk object instance sound position remember action command configuration
 * interface.
 */
export interface AgtkSoundPositionRemember {
  /**
   * Value 0 - 2.
   *  - 0 = Sound Effects
   *  - 1 = Voices
   *  - 2 = Background Music
   */
  soundType: AgtkSoundType;

  /**
   * Value -5, -2, -1, 0, 1+.
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  variableObjectId: number;

  /**
   * Value -1.
   *  - -1 = Single
   */
  variableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  variableId: number;
}
