/**
 * Cocos sprite frame constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCTexture2D } from '../texture-2d';

import type { CCSpriteFrame } from './sprite-frame.interface';

/**
 * Cocos sprite frame constructor interface.
 *
 * @param filename
 * @param rect If parameters' length equal 2, rect in points, else rect in pixels.
 * @param rotated Whether the frame is rotated in the texture.
 * @param offset The offset of the frame in the texture.
 * @param originalSize The size of the frame in the texture.
 * @constructor
 */
export interface CCSpriteFrameConstructor<
  T extends CCSpriteFrame = CCSpriteFrame,
  U extends any[] = [string | CCTexture2D, CCRect, boolean?, CCPoint?, CCPoint?]
> extends CCClassConstructor<T, U> {
  /**
   * Create a cc.SpriteFrame with a texture filename, rect, rotated, offset and originalSize in pixels.
   * The originalSize is the size in pixels of the frame before being trimmed.
   *
   * @param filename
   * @param rect If parameters' length equal 2, rect in points, else rect in pixels.
   * @param rotated
   * @param offset
   * @param originalSize
   * @deprecated since v3.0, please use new construction instead.
   */
  create(...args: U): T;

  /**
   * @deprecated since v3.0, please use new construction instead.
   */
  createWithTexture(...args: U): T;
}
