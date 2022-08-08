/**
 * Agtk object instance scene shake action command configuration interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance scene shake action command configuration interface.
 */
export interface AgtkSceneShake {
  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;

  /**
   * Value true/false.
   *  - True = Fade-in
   *  - False = Don't Fade-in
   */
  fadeIn: boolean;

  /**
   * Value true/false.
   *  - True = Fade-out
   *  - False = Don't Fade-out
   */
  fadeOut: boolean;

  /**
   * Value 0+. NOTE: 300 = 1sec.
   */
  interval300: number;

  /**
   * Value 0+.
   */
  height: number;

  /**
   * Value 0+. Fluctuation.
   */
  heightDispersion: number;

  /**
   * Value 0+.
   */
  width: number;

  /**
   * Value 0+. Fluctuation.
   */
  widthDispersion: number;
}
