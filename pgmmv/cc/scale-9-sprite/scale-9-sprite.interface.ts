/**
 * Cocos scale 9 sprite interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';
import type { CCSprite } from '../sprite';
import type { CCSpriteBatchNode } from '../sprite-batch-node';
import type { CCSpriteFrame } from '../sprite-frame';

/**
 * A 9-slice sprite for cocos2d UI.
 *
 * 9-slice scaling allows you to specify how scaling is applied to specific
 * areas of a sprite. With 9-slice scaling (3x3 grid), you can ensure that the
 * sprite does not become distorted when scaled.
 *
 * @see http://yannickloriot.com/library/ios/cccontrolextension/Classes/CCScale9Sprite.html
 */
export interface CCScale9Sprite extends CCNode {
  /**
   * The cap insets of the 9-slice sprite.
   */
  capInsets: CCRect;

  /**
   * The bottom inset of the 9-slice sprite.
   */
  insetBottom: number;

  /**
   * The left inset of the 9-slice sprite.
   */
  insetLeft: number;

  /**
   * The right inset of the 9-slice sprite.
   */
  insetRight: number;

  /**
   * The top inset of the 9-slice sprite.
   */
  insetTop: number;

  /**
   * The preferred size of the 9-slice sprite.
   */
  preferredSize: CCSize;

  /**
   * Add texture loaded event listener.
   *
   * @param callback
   * @param target
   * @deprecated Since 3.1, please use addEventListener instead.
   */
  addLoadedEventListener(callback: Function, target: object): void;

  /**
   * Gets the bottom side inset.
   */
  getInsetBottom(): number;

  /**
   * Gets the left side inset.
   */
  getInsetLeft(): number;

  /**
   * Gets the right side inset.
   */
  getInsetRight(): number;

  /**
   * Gets the top side inset.
   */
  getInsetTop(): number;

  /**
   * Original sprite's size.
   */
  getOriginalSize(): CCSize;

  /**
   * Initializes a ccui.Scale9Sprite. please do not call this function by
   * yourself, you should pass the parameters to constructor to initialize it.
   */
  init(): boolean;

  /**
   * Initializes a 9-slice sprite with a SpriteBatchNode.
   *
   * @param batchNode
   * @param rect
   * @param rotated
   * @param capInsets
   */
  initWithBatchNode(batchNode: CCSpriteBatchNode, rect: CCRect, rotated: boolean | CCRect, capInsets?: CCRect): boolean;

  /**
   * Initializes a 9-slice sprite with a texture file, a delimitation zone and
   * with the specified cap insets. Once the sprite is created, you can then
   * call its "setContentSize:" method to resize the sprite will all it's
   * 9-slice goodness intact. It respects the anchorPoint too.
   *
   * @param file The name of the texture file.
   * @param rect The rectangle that describes the sub-part of the texture that
   * is the whole image. If the shape is the whole texture, set this to the
   * texture's full rect.
   * @param capInsets The values to use for the cap insets.
   */
  initWithFile(file: string, rect?: CCRect, capInsets?: CCRect): boolean;

  /**
   * Initializes a 9-slice sprite with an sprite frame and with the specified
   * cap insets. Once the sprite is created, you can then call its
   * "setContentSize:" method to resize the sprite will all it's 9-slice
   * goodness interact. It respects the anchorPoint too.
   *
   * @param spriteFrame The sprite frame object.
   * @param capInsets The values to use for the cap insets.
   */
  initWithSpriteFrame(spriteFrame: CCSpriteFrame, capInsets?: CCRect): boolean;

  /**
   * Initializes a 9-slice sprite with an sprite frame name and with the
   * specified cap insets. Once the sprite is created, you can then call its
   * "setContentSize:" method to resize the sprite will all it's 9-slice
   * goodness interact. It respects the anchorPoint too.
   *
   * @param spriteFrameName The sprite frame name.
   * @param capInsets The values to use for the cap insets.
   */
  initWithSpriteFrameName(spriteFrameName: string, capInsets?: CCRect): boolean;

  /**
   * Returns the flag which indicates whether the widget is flipped horizontally
   * or not.
   *
   * It only flips the texture of the widget, and not the texture of the
   * widget's children. Also, flipping the texture doesn't alter the
   * anchorPoint. If you want to flip the anchorPoint too, and/or to flip the
   * children too use: `widget->setScaleX(sprite->getScaleX() * -1);`.
   *
   * @since v3.3
   * @returns True if the widget is flipped vertically, false otherwise.
   */
  isFlippedX(): boolean;

  /**
   * Returns whether or not the opacity will be applied using
   * glColor(R,G,B,opacity) or glColor(opacity, opacity, opacity, opacity);
   *
   * @since v0.8
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Creates and returns a new sprite object with the specified cap insets. You
   * use this method to add cap insets to a sprite or to change the existing cap
   * insets of a sprite. In both cases, you get back a new image and the
   * original sprite remains untouched.
   *
   * @param capInsets The values to use for the cap insets.
   */
  resizableSpriteWithCapInsets(capInsets?: CCRect): CCScale9Sprite | null;

  /**
   * Color: conforms to CCRGBAProtocol protocol.
   *
   * @param color
   */
  setColor(color: CCColor): void;

  /**
   * Sets the untransformed size of the Scale9Sprite.
   *
   * @param size The untransformed size of the Scale9Sprite or The untransformed
   * size's width of the Scale9Sprite.
   * @param height The untransformed size's height of the Scale9Sprite.
   */
  setContentSize(size: number | CCSize, height?: number): void;

  /**
   * Sets whether the widget should be flipped horizontally or not.
   *
   * @param flippedX True if the widget should be flipped horizontally, false
   * otherwise.
   * @since v3.3
   */
  setFlippedX(flippedX: boolean): void;

  /**
   * Sets whether the widget should be flipped vertically or not.
   *
   * @param flippedY True if the widget should be flipped vertically, false otherwise.
   * @since v3.3
   */
  setFlippedY(flippedY: boolean): void;

  /**
   * Sets the bottom side inset.
   *
   * @param insetBottom
   */
  setInsetBottom(insetBottom: number): void;

  /**
   * Sets the left side inset.
   *
   * @param insetLeft
   */
  setInsetLeft(insetLeft: number): void;

  /**
   * Sets the right side inset.
   *
   * @param insetRight
   */
  setInsetRight(insetRight: number): void;

  /**
   * Sets the top side inset.
   *
   * @param insetTop
   */
  setInsetTop(insetTop: number): void;

  /**
   * Opacity: conforms to CCRGBAProtocol protocol.
   *
   * @param opacity
   */
  setOpacity(opacity: number): void;

  /**
   * Sets the premultipliedAlphaOpacity property. If set to NO then opacity will
   * be applied as: glColor(R,G,B,opacity); If set to YES then opacity will be
   * applied as: glColor(opacity, opacity, opacity, opacity ); Textures with
   * premultiplied alpha will have this property by default on YES. Otherwise
   * the default value is NO.
   *
   * @param value
   * @since v0.8
   */
  setOpacityModifyRGB(value: boolean): void;

  /**
   * @param enabled True to enable 9-slice, false otherwise.
   */
  setScale9Enabled(enabled: boolean): void;

  /**
   * Set the sprite frame of ccui.Scale9Sprite.
   *
   * @param spriteFrame
   * @param capInsets
   */
  setSpriteFrame(spriteFrame: CCSpriteFrame, capInsets?: CCRect): void;

  /**
   * Sets Scale9Sprite's state.
   *
   * @param state
   * @since v3.3
   */
  setState(state: number): void;

  /**
   * Return texture is loaded.
   */
  textureLoaded(): boolean;

  /**
   * Update the Scale9Sprite with a SpriteBatchNode.
   *
   * @param batchNode
   * @param originalRect
   * @param rotated
   * @param capInsets
   */
  updateWithBatchNode(batchNode: CCSpriteBatchNode, originalRect: CCRect, rotated: boolean, capInsets: CCRect): boolean;

  /**
   * Update the Scale9Sprite with a Sprite.
   *
   * @param sprite A sprite pointer.
   * @param spriteRect A delimitation zone.
   * @param spriteFrameRotated Whether the sprite is rotated or not.
   * @param offset The offset when slice the sprite.
   * @param originalSize The origial size of the sprite.
   * @param capInsets The Values to use for the cap insets.
   * @returns True if update success, false otherwise.
   */
  updateWithSprite(
    sprite: CCSprite,
    spriteRect: CCRect,
    spriteFrameRotated: boolean,
    offset: CCPoint,
    originalSize: CCSize,
    capInsets: CCRect
  ): boolean;
}
