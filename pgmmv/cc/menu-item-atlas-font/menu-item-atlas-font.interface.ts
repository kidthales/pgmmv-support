/**
 * Cocos menu item atlas font interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemLabel } from '../menu-item-label';
import type { CCNode } from '../node';

/**
 * Helper class that creates a MenuItemLabel class with a LabelAtlas.
 *
 * ```
 * var menuItem = new cc.MenuItemAtlasFont(param1,param2...);
 * ```
 */
export interface CCMenuItemAtlasFont extends CCMenuItemLabel {
  /**
   * Initializes a cc.MenuItemAtlasFont with string.
   *
   * @param value The text to display.
   * @param charMapFile The character map file.
   * @param itemWidth
   * @param itemHeight
   * @param startCharMap A single character.
   * @param callback
   * @param target
   */
  initWithString(
    value: string,
    charMapFile: string,
    itemWidth: number,
    itemHeight: number,
    startCharMap: string,
    callback?: Function | string,
    target?: CCNode
  ): boolean;
}
