/**
 * Cocos sprite frame interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';
import type { CCTexture2D } from '../texture-2d';

/**
 * A cc.SpriteFrame has:
 * - texture: A cc.Texture2D that will be used by the cc.Sprite
 * - rectangle: A rectangle of the texture
 *
 * You can modify the frame of a cc.Sprite by doing:
 * ```
 * // 1. Create a cc.SpriteFrame with image path
 * var frame1 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128));
 * var frame2 = new cc.SpriteFrame("res/grossini_dance.png",cc.rect(0,0,90,128),false,0,cc.size(90,128));
 *
 * // 2. Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
 * var texture = cc.textureCache.addImage("res/grossini_dance.png");
 * var frame1 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128));
 * var frame2 = new cc.SpriteFrame(texture, cc.rect(0,0,90,128),false,0,cc.size(90,128));
 * ```
 */
export interface CCSpriteFrame extends CCClass {
  /**
   * Add a event listener for texture loaded event.
   *
   * @param callback
   * @param target
   * @deprecated since 3.1, please use addEventListener instead.
   */
  addLoadedEventListener(callback: Function, target: Record<string, unknown>): void;

  /**
   * Clone the sprite frame;
   */
  clone(): CCSpriteFrame;

  /**
   * Copy the sprite frame.
   */
  copy(): CCSpriteFrame;

  /**
   * Copy the sprite frame.
   */
  copyWithZone(): CCSpriteFrame;

  /**
   * Returns the offset of the frame in the texture.
   */
  getOffset(): CCPoint;

  /**
   * Returns the offset of the sprite frame in the texture in pixel.
   */
  getOffsetInPixels(): CCPoint;

  /**
   * Returns the original size of the trimmed image.
   */
  getOriginalSize(): CCSize;

  /**
   * Returns the original size of the trimmed image.
   */
  getOriginalSizeInPixels(): CCSize;

  /**
   * Returns the rect of the sprite frame in the texture.
   */
  getRect(): CCRect;

  /**
   * Gets the rect of the frame in the texture.
   */
  getRectInPixels(): CCRect;

  /**
   * Returns the texture of the frame.
   */
  getTexture(): CCTexture2D;

  /**
   * Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   *
   * @param texture
   * @param rect If parameters' length equal 2, rect in points, else rect in pixels.
   * @param rotated Default: false
   * @param offset Default: cc.p(0,0)
   * @param originalSize Default: rect.size
   */
  initWithTexture(
    texture: string | CCTexture2D,
    rect: CCRect,
    rotated?: boolean,
    offset?: CCPoint,
    originalSize?: CCSize
  ): boolean;

  /**
   * Returns whether the sprite frame is rotated in the texture.
   */
  isRotated(): boolean;

  /**
   * Sets the offset of the frame in the texture.
   *
   * @param offsets
   */
  setOffset(offsets: CCPoint): void;

  /**
   * Sets the offset of the sprite frame in the texture in pixel.
   *
   * @param offsetInPixels
   */
  setOffsetInPixels(offsetInPixels: CCPoint): void;

  /**
   * Sets the original size of the trimmed image.
   *
   * @param sizeInPixels
   */
  setOriginalSize(sizeInPixels: CCSize): void;

  /**
   * Sets the original size of the trimmed image.
   *
   * @param sizeInPixels
   */
  setOriginalSizeInPixels(sizeInPixels: CCSize): void;

  /**
   * Sets the rect of the sprite frame in the texture.
   *
   * @param rect
   */
  setRect(rect: CCRect): void;

  /**
   * Sets the rect of the frame in the texture.
   *
   * @param rectInPixels
   */
  setRectInPixels(rectInPixels: CCRect): void;

  /**
   * Set whether the sprite frame is rotated in the texture.
   *
   * @param bRotated
   */
  setRotated(bRotated: boolean): void;

  /**
   * Sets the texture of the frame, the texture is retained automatically.
   *
   * @param texture
   */
  setTexture(texture: CCTexture2D): void;

  /**
   * Returns whether the texture have been loaded.
   */
  textureLoaded(): boolean;
}
