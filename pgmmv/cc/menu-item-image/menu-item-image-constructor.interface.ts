/**
 * Cocos menu item image constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemSpriteConstructor } from '../menu-item-sprite';
import type { CCNode } from '../node';

import type { CCMenuItemImage } from './menu-item-image.interface';

/**
 * Cocos menu item image constructor interface.
 *
 * @param normalImage File name for normal state.
 * @param selectedImage Image for selected state.
 * @param disabledImage Disabled image OR callback function.
 * @param callback Callback function, either name in string or pass the whole
 * function OR the target.
 * @param target cc.Node target to run callback when clicked.
 * @constructor
 */
export interface CCMenuItemImageConstructor<
  T extends CCMenuItemImage = CCMenuItemImage,
  U extends any[] = [string?, string?, (string | CCNode)?, (Function | string)?, CCNode?]
> extends CCMenuItemSpriteConstructor<T, U> {}
