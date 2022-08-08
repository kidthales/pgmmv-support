/**
 * Agtk action commands scroll message show constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands scroll message show constants interface.
 */
export interface AgtkScrollMessageShow {
  /**
   * Background none.
   */
  readonly BackgroundNone: -1;

  /**
   * Background template.
   */
  readonly BackgroundTemplate: 0;

  /**
   * Background image.
   */
  readonly BackgroundImage: 1;

  /**
   * Template black.
   */
  readonly TemplateBlack: 1;

  /**
   * Template white.
   */
  readonly TemplateWhite: 2;

  /**
   * Position center.
   */
  readonly PositionCenter: 0;

  /**
   * Position lock object center.
   */
  readonly PositionLockObjectCenter: 1;

  /**
   * Position scene position.
   */
  readonly PositionScenePosition: 2;

  /**
   * Left horizontal alignment.
   */
  readonly HorzAlignLeft: 0;

  /**
   * Center horizontal alignment.
   */
  readonly HorzAlignCenter: 1;

  /**
   * Right horizontal alignment.
   */
  readonly HorzAlignRight: 2;
}
