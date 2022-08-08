/**
 * Agtk object instance sound play action command configuration interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSoundPlayValue as AgtkSoundType } from '../../../constants/action-commands/sound-play';

/**
 * Agtk object instance sound play action command configuration interface.
 */
export interface AgtkSoundPlay {
  /**
   * Value 0 - 2.
   *  - 0 = Play Sound Effect
   *  - 1 = Play Voice
   *  - 2 = Play Background Music
   */
  soundType: AgtkSoundType;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Sound Effects you may have added
   */
  seId: number;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Voices you may have added
   */
  voiceId: number;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Background Music you may have added
   */
  bgmId: number;

  /**
   * Value true/false.
   *  - True = Loop
   *  - False = No loop
   */
  loop: boolean;

  /**
   * Value true/false.
   *  - True = Fade-in
   *  - False = No fade-in
   */
  fadein: boolean;

  /**
   * Value 0.00+. This is for the 'fadeIn' NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = Specify Playback Time
   *  - False = Don't use playback time
   */
  specifyAudioPosition: boolean;

  /**
   * Value -5, -2, -1, 0, 1+.
   *  - -5 = Locked
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 0 = Project Common
   *  - 1+ = Any created objects you may have
   */
  audioPositionVariableObjectId: number;

  /**
   * Value -1.
   *  - -1 = Single
   */
  audioPositionVariableQualifierId: number;

  /**
   * Value -1 (None) or any whole number. Value will depend on if Self or Common
   * selected as well as if created or default variable.
   */
  audioPositionVariableId: number;

  /**
   * Value 0 - 100.
   */
  volume: number;

  /**
   * Value -50 - 50.
   */
  pan: number;

  /**
   * Value -50 - 50.
   */
  pitch: number;
}
