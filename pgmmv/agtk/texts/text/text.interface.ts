/**
 * Agtk text interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk text interface.
 */
export interface AgtkText {
  /**
   * Text ID.
   */
  id: number;

  /**
   * Text name.
   */
  name: string;

  /**
   * Font ID.
   */
  fontId: number;

  /**
   * Character spacing.
   */
  letterSpacing: number;

  /**
   * Line spacing.
   */
  lineSpacing: number;

  /**
   * Stored properties: locale as key, text as value.
   */
  localeText: Record<string, string>;

  /**
   * Returns text with expanded text tags of specified locale (¥O, ¥T, ¥V).
   *
   * @param arg1 Locale.
   */
  getText(arg1: string): string;
}
