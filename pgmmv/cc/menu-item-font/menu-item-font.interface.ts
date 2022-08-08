/**
 * Cocos menu item font interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemLabel } from '../menu-item-label';
import type { CCNode } from '../node';

/**
 * Helper class that creates a CCMenuItemLabel class with a Label.
 *
 * ```
 * var menuItem = new cc.MenuItemFont(value, callback, target);
 * ```
 */
export interface CCMenuItemFont extends CCMenuItemLabel {
  /**
   * Font name of font item.
   */
  fontName: string;

  /**
   * Font size of font item.
   */
  fontSize: number;

  /**
   * Return the font name for cc.MenuItemFont.
   */
  getFontName(): string;

  /**
   * Return the font size of cc.MenuItemFont.
   */
  getFontSize(): number;

  /**
   * Initializes cc.MenuItemFont with string.
   *
   * @param value Text for the menu item.
   * @param callback the callback to run, either in function name or pass in the
   * actual function.
   * @param target The target to run callback.
   */
  initWithString(value: string, callback?: Function | string, target?: CCNode): boolean;

  /**
   * Set the font name for cc.MenuItemFont.
   *
   * @param name
   */
  setFontName(name: string): void;

  /**
   * Set the font size for cc.MenuItemFont.
   *
   * @param s
   */
  setFontSize(s: number): void;
}
