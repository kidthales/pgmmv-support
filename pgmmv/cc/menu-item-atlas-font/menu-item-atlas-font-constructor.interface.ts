/**
 * Cocos menu item atlas font constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemLabelConstructor } from '../menu-item-label';
import type { CCNode } from '../node';

import type { CCMenuItemAtlasFont } from './menu-item-atlas-font.interface';

/**
 * Cocos menu item atlas font constructor interface.
 *
 * @param value The text to display.
 * @param charMapFile The character map file.
 * @param itemWidth
 * @param itemHeight
 * @param startCharMap A single character.
 * @param callback
 * @param target
 * @constructor
 */
export interface CCMenuItemAtlasFontConstructor<
  T extends CCMenuItemAtlasFont = CCMenuItemAtlasFont,
  U extends any[] = [string, string, number, number, string, (Function | string)?, CCNode?]
> extends CCMenuItemLabelConstructor<T, U> {}
