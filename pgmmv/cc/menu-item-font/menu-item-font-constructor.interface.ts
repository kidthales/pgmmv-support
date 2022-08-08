/**
 * Cocos menu item font constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemLabelConstructor } from '../menu-item-label';
import type { CCNode } from '../node';

import type { CCMenuItemFont } from './menu-item-font.interface';

/**
 * Cocos menu item font constructor interface.
 *
 * @param value Text for the menu item.
 * @param callback the callback to run, either in function name or pass in the
 * actual function.
 * @param target The target to run callback.
 * @constructor
 */
export interface CCMenuItemFontConstructor<
  T extends CCMenuItemFont = CCMenuItemFont,
  U extends any[] = [string?, (Function | string)?, CCNode?]
> extends CCMenuItemLabelConstructor<T, U> {
  /**
   * A shared function to get the font name for menuitem font.
   */
  fontName(): string;

  /**
   * A shared function to get the font size for menuitem font.
   */
  fontSize(): number;

  /**
   * A shared function to set the fontsize for menuitem font.
   *
   * @param name
   */
  setFontName(name: string): void;

  /**
   * A shared function to set the fontSize for menuitem font.
   *
   * @param fontSize
   */
  setFontSize(fontSize: number): void;
}
