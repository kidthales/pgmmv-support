/**
 * Agtk action commands message show constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands message show constants interface.
 */
export interface AgtkMessageShow {
  /**
   * Window none.
   */
  readonly WindowNone: -1;

  /**
   * Window template.
   */
  readonly WindowTemplate: 0;

  /**
   * Window image.
   */
  readonly WindowImage: 1;

  /**
   * Template white frame.
   */
  readonly TemplateWhiteFrame: 0;

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

  /**
   * Top vertical alignment.
   */
  readonly VertAlignTop: 0;

  /**
   * Center vertical alignment.
   */
  readonly VertAlignCenter: 1;

  /**
   * Bottom vertical alignment.
   */
  readonly VertAlignBottom: 2;
}
