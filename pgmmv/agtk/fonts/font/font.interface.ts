/**
 * Agtk font interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk font interface.
 */
export interface AgtkFont {
  /**
   * Font ID.
   */
  id: number;

  /**
   * Font name.
   */
  name: string;

  /**
   * If TRUE, uses image as font.
   */
  imageFontFlag: boolean;

  /**
   * Image ID.
   */
  imageId: number;

  /**
   * Font file name.
   */
  fontName: string;

  /**
   * TTF name.
   */
  ttfName: string;

  /**
   * Font size.
   */
  fontSize: number;

  /**
   * If TRUE, fixes width.
   */
  fixedWidth: boolean;

  /**
   * Disable antialiasing.
   */
  antialiasDisabled: boolean;

  /**
   * Threshold.
   */
  aliasThreshold: number;

  /**
   * Half-width.
   */
  hankakuWidth: number;

  /**
   * Full-width.
   */
  zenkakuWidth: number;

  /**
   * Character placement.
   */
  letterLayout: string;
}
