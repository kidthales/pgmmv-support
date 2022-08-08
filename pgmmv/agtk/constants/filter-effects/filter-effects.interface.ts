/**
 * Agtk filter effects constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk filter effects constants interface.
 */
export interface AgtkFilterEffects {
  /**
   * Effect noise.
   */
  readonly EffectNoise: 0;

  /**
   * Effect mosaic.
   */
  readonly EffectMosaic: 1;

  /**
   * Effect monochrome.
   */
  readonly EffectMonochrome: 2;

  /**
   * Effect sepia.
   */
  readonly EffectSepia: 3;

  /**
   * Effect negative/positive reverse.
   */
  readonly EffectNegaPosiReverse: 4;

  /**
   * Effect defocus.
   */
  readonly EffectDefocus: 5;

  /**
   * Effect chromatic aberration.
   */
  readonly EffectChromaticAberration: 6;

  /**
   * Effect darkness.
   */
  readonly EffectDarkness: 7;

  /**
   * Effect display image.
   */
  readonly EffectDispImage: 8;

  /**
   * Effect fill color.
   */
  readonly EffectFillColor: 9;

  /**
   * Effect transparency.
   */
  readonly EffectTransparency: 10;

  /**
   * Effect blink.
   */
  readonly EffectBlink: 11;

  /**
   * Placement center.
   */
  readonly PlacementCenter: 0;

  /**
   * Placement magnify.
   */
  readonly PlacementMagnify: 1;

  /**
   * Placement tiling.
   */
  readonly PlacementTiling: 2;

  /**
   * Placement keep ratio.
   */
  readonly PlacementKeepRatio: 3;

  /**
   * Placement object center.
   */
  readonly PlacementObjectCenter: 4;
}
