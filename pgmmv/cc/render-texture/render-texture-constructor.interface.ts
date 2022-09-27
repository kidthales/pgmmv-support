/**
 * Cocos render texture constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';

import type { CCRenderTexture } from './render-texture.interface';

/**
 * Cocos render texture constructor interface.
 *
 * @param width
 * @param height
 * @param format cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA
 * @param depthStencilFormat
 * @constructor
 */
export interface CCRenderTextureConstructor<
  T extends CCRenderTexture = CCRenderTexture,
  U extends any[] = [number?, number?, number?, number?]
> extends CCNodeConstructor<T, U> {
  /**
   * Creates a RenderTexture object with width and height in Points and a pixel
   * format, only RGB and RGBA formats are valid.
   *
   * @param width
   * @param height
   * @param format cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA
   * @param depthStencilFormat
   * @deprecated since v3.0 please use new cc.RenderTexture() instead.
   */
  create(...args: U): T;
}
