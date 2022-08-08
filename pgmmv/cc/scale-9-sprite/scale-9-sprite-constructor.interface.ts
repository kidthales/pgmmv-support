/**
 * Cocos scale 9 sprite constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';
import type { CCRect } from '../rect';
import type { CCSpriteFrame } from '../sprite-frame';

import type { CCScale9Sprite } from './scale-9-sprite.interface';

/**
 * Cocos scale 9 sprite constructor interface.
 *
 * @param file File name of texture or a SpriteFrame.
 * @param rectOrCapInsets
 * @param capInsets
 * @constructor
 */
export interface CCScale9SpriteConstructor<
  T extends CCScale9Sprite = CCScale9Sprite,
  U extends any[] = [(string | CCSpriteFrame)?, CCRect?, CCRect?]
> extends CCNodeConstructor<T, U> {
  /**
   * Create a Scale9Sprite with Sprite frame.
   *
   * @param spriteFrame
   * @param capInsets
   * @returns Scale9Sprite instance.
   * @deprecated Since v3.0, please use new constructor instead.
   */
  createWithSpriteFrame(...args: U): T;

  /**
   * Create a Scale9Sprite with a Sprite frame name.
   *
   * @param spriteFrameName
   * @param capInsets
   * @returns Scale9Sprite instance.
   * @deprecated Since v3.0, please use new constructor instead.
   */
  createWithSpriteFrameName(...args: U): T;
}
