/**
 * Agtk object instance object filter effect action command configuration
 * interface module.
 *
 * @packageDocumentation
 */
import type { AgtkFilterEffects } from '../../../constants/filter-effects';

/**
 * Agtk object filter effect effect type type.
 *
 * @internal
 */
type AgtkEffectType =
  | AgtkFilterEffects['EffectNoise']
  | AgtkFilterEffects['EffectMosaic']
  | AgtkFilterEffects['EffectMonochrome']
  | AgtkFilterEffects['EffectSepia']
  | AgtkFilterEffects['EffectNegaPosiReverse']
  | AgtkFilterEffects['EffectDefocus']
  | AgtkFilterEffects['EffectChromaticAberration']
  | AgtkFilterEffects['EffectDarkness']
  | AgtkFilterEffects['EffectDispImage']
  | AgtkFilterEffects['EffectFillColor']
  | AgtkFilterEffects['EffectTransparency']
  | AgtkFilterEffects['EffectBlink'];

/**
 * Agtk object instance object filter effect action command configuration interface.
 */
export interface AgtkObjectFilterEffect {
  /**
   * Value 0 - 11.
   *  - 0 = Noise
   *  - 1 = Mosaic
   *  - 2 = Monochrome
   *  - 3 = Sepia
   *  - 4 = Invert
   *  - 5 = Blur
   *  - 6 = Chromatic Aberration
   *  - 7 = Darken
   *  - 8 = Show Image
   *  - 9 = Apply Selected Color
   *  - 10 = Transparency
   *  - 11 = Blink
   */
  effectType: AgtkEffectType;

  /**
   * Value 0 - 100.
   */
  noise: number;

  /**
   * Value 0 - 100.
   */
  mosaic: number;

  /**
   * Value 0 - 100.
   */
  monochrome: number;

  /**
   * Value 0 - 100.
   */
  sepia: number;

  /**
   * Value 0 - 100. Referring to Invert %.
   */
  negaPosiReverse: number;

  /**
   * Value 0 - 100. Referring to Blur %.
   */
  defocus: number;

  /**
   * Value 0 - 100.
   */
  chromaticAberration: number;

  /**
   * Value 0 - 100. Referring to Darken %.
   */
  darkness: number;

  /**
   * Value 0 - 100.
   */
  transparency: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  blinkInterval300: number;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any image ID you have in Resources tab
   */
  imageId: number;

  /**
   * Value 0 - 100.
   */
  imageTransparency: number;

  /**
   * N/A.
   */
  imagePlacement: unknown;

  /**
   * Value 0 - 255.
   */
  fillA: number;

  /**
   * Value 0 - 255.
   */
  fillR: number;

  /**
   * Value 0 - 255.
   */
  fillG: number;

  /**
   * Value 0 - 255.
   */
  fillB: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;
}
