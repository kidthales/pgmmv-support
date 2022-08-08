/**
 * Cocos menu item sprite constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemConstructor } from '../menu-item';
import type { CCNode } from '../node';
import type { CCSprite } from '../sprite';

import type { CCMenuItemSprite } from './menu-item-sprite.interface';

/**
 * Cocos menu item sprite constructor interface.
 *
 * @param normalSprite Normal state image.
 * @param selectedSprite Selected state image.
 * @param three Disabled state image OR target node.
 * @param four Callback function name in string or actual function, OR target Node.
 * @param five Callback function name in string or actual function.
 * @constructor
 */
export interface CCMenuItemSpriteConstructor<
  T extends CCMenuItemSprite = CCMenuItemSprite,
  U extends any[] = [CCSprite?, CCSprite?, (CCSprite | CCNode)?, (Function | string | CCNode)?, (Function | string)?]
> extends CCMenuItemConstructor<T, U> {}
