/**
 * Cocos sprite constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';
import type { CCRect } from '../rect';
import type { CCSpriteFrame } from '../sprite-frame';
import type { CCTexture2D } from '../texture-2d';

import type { CCSprite } from './sprite.interface';

/**
 * Cocos sprite constructor interface.
 *
 * @param fileImage
 * @param rect
 * @param rotated
 * @constructor
 */
export interface CCSpriteConstructor<
  T extends CCSprite = CCSprite,
  U extends any[] = [(string | CCSpriteFrame | HTMLImageElement | CCTexture2D)?, CCRect?, boolean?]
> extends CCNodeConstructor<T, U> {
  /**
   * Create a sprite with image path or frame name or texture or spriteFrame.
   *
   * @param fileName The string which indicates a path to image file, e.g., "scene1/monster.png".
   * @param rect Only the contents inside rect of pszFileName's texture will be applied for this sprite.
   * @param rotated Whether or not the texture rectangle is rotated.
   * @deprecated since v3.0, please use new construction instead.
   */
  create(...args: U): T;

  /**
   * @deprecated since v3.0, please use new construction instead.
   */
  createWithSpriteFrame(...args: U): T;

  /**
   * @deprecated since v3.0, please use new construction instead.
   */
  createWithSpriteFrameName(...args: U): T;

  /**
   * @deprecated since v3.0, please use new construction instead.
   */
  createWithTexture(...args: U): T;

  /**
   * Invalid index on the cc.SpriteBatchNode.
   *
   * @static
   */
  readonly INDEX_NOT_INITIALIZED: -1;
}
