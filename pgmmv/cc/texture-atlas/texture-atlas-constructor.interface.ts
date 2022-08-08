/**
 * Cocos texture atlas constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCTexture2D } from '../texture-2d';

import type { CCTextureAtlas } from './texture-atlas.interface';

/**
 * Cocos texture constructor interface.
 *
 * @param filename
 * @param capacity
 * @constructor
 */
export interface CCTextureAtlasConstructor<
  T extends CCTextureAtlas = CCTextureAtlas,
  U extends any[] = [(string | CCTexture2D)?, number?]
> extends CCClassConstructor<T, U> {
  /**
   * Creates a TextureAtlas with an filename and with an initial capacity for Quads.
   * The TextureAtlas capacity can be increased in runtime.
   *
   * @param filename
   * @param capacity
   * @deprecated since v3.0, please use new cc.TextureAtlas(fileName, capacity) instead.
   */
  create(...args: U): T;

  /**
   * @deprecated since v3.0, please use new cc.TextureAtlas(texture) instead.
   */
  createWithTexture(...args: U): T;
}
