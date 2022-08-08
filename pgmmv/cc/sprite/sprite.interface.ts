/**
 * Cocos sprite interface module.
 *
 * @packageDocumentation
 */
import type { CCBlendFunc } from '../blend-func';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';
import type { CCSpriteBatchNode } from '../sprite-batch-node';
import type { CCSpriteFrame } from '../sprite-frame';
import type { CCTexture2D } from '../texture-2d';
import type { CCTextureAtlas } from '../texture-atlas';
import type { CCV3F_C4B_T2F_Quad } from '../v3f-c4b-t2f-quad';

/**
 * cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) )
 * cc.Sprite can be created with an image, or with a sub-rectangle of an image.
 *
 * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid
 * - Features when the parent is a cc.BatchNode:
 * - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.
 * - Limitations
 *   - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)
 *   - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl)
 *   - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.
 *   - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property.
 *   - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.
 *
 * If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:
 * - It supports blending functions
 * - It supports aliasing / antialiasing
 * - But the rendering will be slower: 1 draw per children.
 *
 * The default anchorPoint in cc.Sprite is (0.5, 0.5).
 * ```
 * 1.Create a sprite with image path and rect
 * var sprite1 = new cc.Sprite("res/HelloHTML5World.png");
 * var sprite2 = new cc.Sprite("res/HelloHTML5World.png",cc.rect(0,0,480,320));
 *
 * 2.Create a sprite with a sprite frame name. Must add "#" before frame name.
 * var sprite = new cc.Sprite('#grossini_dance_01.png');
 *
 * 3.Create a sprite with a sprite frame
 * var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
 * var sprite = new cc.Sprite(spriteFrame);
 *
 * 4.Create a sprite with an existing texture contained in a CCTexture2D object
 *      After creation, the rect will be the size of the texture, and the offset will be (0,0).
 * var texture = cc.textureCache.addImage("HelloHTML5World.png");
 * var sprite1 = new cc.Sprite(texture);
 * var sprite2 = new cc.Sprite(texture, cc.rect(0,0,480,320));
 */
export interface CCSprite extends CCNode {
  /**
   * The index used on the TextureAtlas.
   */
  atlasIndex: number;

  /**
   * The batch node object if this sprite is rendered by cc.SpriteBatchNode.
   */
  batchNode: CCSpriteBatchNode;

  /**
   * Indicates whether the sprite needs to be updated.
   */
  dirty: boolean;

  /**
   * Indicates whether or not the sprite is flipped on x axis.
   */
  flippedX: boolean;

  /**
   * Indicates whether or not the sprite is flipped on y axis.
   */
  flippedY: boolean;

  /**
   * The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
   */
  readonly offsetX: number;

  /**
   * The offset position on y axis of the sprite in texture. Calculated automatically by editors like Zwoptex.
   */
  readonly offsetY: number;

  /**
   * The quad (tex coords, vertex coords and color) information.
   */
  readonly quad: CCV3F_C4B_T2F_Quad;

  /**
   * Texture used to render the sprite.
   */
  texture: CCTexture2D;

  /**
   * The weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
   */
  textureAtlas: CCTextureAtlas;

  /**
   * Indicate whether the texture rectangle is rotated.
   */
  readonly textureRectRotated: boolean;

  /**
   * Add child to sprite (override cc.Node).
   *
   * @param child
   * @param localZOrder Child's zOrder.
   * @param tag Child's tag.
   */
  addChild(child: CCSprite, localZOrder: number, tag?: number | string): void;

  /**
   * Add a event listener for texture loaded event.
   *
   * @param callback
   * @param target
   * @deprecated since 3.1, please use addEventListener instead
   */
  addLoadedEventListener(callback: Function, target: Record<string, unknown>): void;

  /**
   * Returns the current displayed frame.
   *
   * @deprecated since 3.4, please use getSpriteFrame instead
   */
  displayFrame(): CCSpriteFrame;

  /**
   * Returns the index used on the TextureAtlas.
   */
  getAtlasIndex(): number;

  /**
   * Returns the batch node object if this sprite is rendered by cc.SpriteBatchNode.
   */
  getBatchNode(): CCSpriteBatchNode | null;

  /**
   * Returns the blend function.
   */
  getBlendFunc(): CCBlendFunc;

  /**
   * Returns the offset position of the sprite. Calculated automatically by editors like Zwoptex.
   */
  getOffsetPosition(): CCPoint;

  /**
   * Returns the quad (tex coords, vertex coords and color) information.
   */
  getQuad(): CCV3F_C4B_T2F_Quad | null;

  /**
   * Returns the current displayed frame.
   */
  getSpriteFrame(): CCSpriteFrame;

  /**
   * Returns the texture of the sprite node.
   */
  getTexture(): CCTexture2D;

  /**
   * Returns the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
   */
  getTextureAtlas(): CCTextureAtlas;

  /**
   * Returns the rect of the cc.Sprite in points.
   */
  getTextureRect(): CCRect;

  /**
   * Sets whether ignore anchor point for positioning.
   *
   * @param relative
   */
  ignoreAnchorPointForPosition(relative: boolean): void;

  /**
   * Initializes an empty sprite with nothing init.
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   */
  init(): boolean;

  /**
   * Initializes a sprite with an image filename.
   * This method will find pszFilename from local file system, load its content to CCTexture2D,
   * then use CCTexture2D to create a sprite.
   * After initialization, the rect used will be the size of the image. The offset will be (0,0).
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   *
   * @param filename The path to an image file in local file system.
   * @param rect The rectangle assigned the content area from texture.
   */
  initWithFile(filename: string, rect: CCRect): boolean;

  /**
   * Initializes a sprite with a SpriteFrame. The texture and rect in SpriteFrame will be applied on this sprite.
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   *
   * @param spriteFrame A CCSpriteFrame object. It should includes a valid texture and a rect.
   */
  initWithSpriteFrame(spriteFrame: CCSpriteFrame): boolean;

  /**
   * Initializes a sprite with a sprite frame name.
   * A cc.SpriteFrame will be fetched from the cc.SpriteFrameCache by name.
   * If the cc.SpriteFrame doesn't exist it will raise an exception.
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   * ```
   * var sprite = new cc.Sprite();
   * sprite.initWithSpriteFrameName("grossini_dance_01.png");
   * ```
   *
   * @param spriteFrameName A key string that can fected a valid cc.SpriteFrame from cc.SpriteFrameCache.
   */
  initWithSpriteFrameName(spriteFrameName: string): boolean;

  /**
   * Initializes a sprite with a texture and a rect in points, optionally rotated.
   * After initialization, the rect used will be the size of the texture, and the offset will be (0,0).
   * Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
   *
   * @param texture A pointer to an existing CCTexture2D object. You can use a CCTexture2D object for many sprites.
   * @param rect Only the contents inside rect of this texture will be applied for this sprite.
   * @param rotated Whether or not the texture rectangle is rotated.
   * @param counterclockwise Default: true. Whether or not the texture rectangle rotation is counterclockwise
   * (texture package is counterclockwise, spine is clockwise).
   */
  initWithTexture(
    texture: CCTexture2D | HTMLCanvasElement | HTMLImageElement,
    rect?: CCRect,
    rotated?: boolean,
    counterclockwise?: boolean
  ): boolean;

  /**
   * Returns whether or not the Sprite needs to be updated in the Atlas.
   */
  isDirty(): boolean;

  /**
   * Returns the flag which indicates whether the sprite is flipped horizontally or not.
   *
   * It only flips the texture of the sprite, and not the texture of the sprite's children.
   * Also, flipping the texture doesn't alter the anchorPoint.
   * If you want to flip the anchorPoint too, and/or to flip the children too use:
   * sprite.setScaleX(sprite.getScaleX() * -1);
   */
  isFlippedX(): boolean;

  /**
   * Return the flag which indicates whether the sprite is flipped vertically or not.
   *
   * It only flips the texture of the sprite, and not the texture of the sprite's children.
   * Also, flipping the texture doesn't alter the anchorPoint.
   * If you want to flip the anchorPoint too, and/or to flip the children too use:
   * sprite.setScaleY(sprite.getScaleY() * -1);
   */
  isFlippedY(): boolean;

  /**
   * Returns whether or not a cc.SpriteFrame is being displayed.
   *
   * @param frame
   */
  isFrameDisplayed(frame: CCSpriteFrame): boolean;

  /**
   * Returns whether opacity modify color or not.
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Returns whether or not the texture rectangle is rotated.
   */
  isTextureRectRotated(): boolean;

  /**
   * Removes all children from the container.
   *
   * @param cleanup Whether or not cleanup all running actions.
   */
  removeAllChildren(cleanup: boolean): void;

  /**
   * Removes a child from the sprite.
   *
   * @param child
   * @param cleanup Whether or not cleanup all running actions.
   */
  removeChild(child: CCSprite, cleanup: boolean): void;

  /**
   * Reorders a child according to a new z value. (override cc.Node ).
   *
   * @param child
   * @param zOrder
   */
  reorderChild(child: CCSprite, zOrder: number): void;

  /**
   * Sets the index used on the TextureAtlas.
   *
   * @param atlasIndex
   */
  setAtlasIndex(atlasIndex: number): void;

  /**
   * Sets the batch node to sprite
   * ```
   * var batch = new cc.SpriteBatchNode("Images/grossini_dance_atlas.png", 15);
   * var sprite = new cc.Sprite(batch.texture, cc.rect(0, 0, 57, 57));
   * batch.addChild(sprite);
   * layer.addChild(batch);
   * ```
   *
   * @param spriteBatchNode
   */
  setBatchNode(spriteBatchNode: CCSpriteBatchNode | null): void;

  /**
   * Conforms to cc.TextureProtocol protocol.
   *
   * @param src
   * @param dst
   */
  setBlendFunc(src: number | CCBlendFunc, dst: number): void;

  /**
   * Makes the sprite to be updated in the Atlas.
   *
   * @param bDirty
   */
  setDirty(bDirty: boolean): void;

  /**
   * Sets a new display frame to the sprite.
   *
   * @param newFrame
   */
  setDisplayFrame(newFrame: CCSpriteFrame | string): void;

  /**
   * Changes the display frame with animation name and index.
   * The animation name will be get from the CCAnimationCache.
   *
   * @param animationName
   * @param frameIndex
   */
  setDisplayFrameWithAnimationName(animationName: string, frameIndex: number): void;

  /**
   * Sets whether the sprite should be flipped horizontally or not.
   *
   * @param flippedX
   */
  setFlippedX(flippedX: boolean): void;

  /**
   * Sets whether the sprite should be flipped vertically or not.
   *
   * @param flippedY
   */
  setFlippedY(flippedY: boolean): void;

  /**
   * Sets whether opacity modify color or not.
   *
   * @param modify
   */
  setOpacityModifyRGB(modify: boolean): void;

  /**
   * Sets a new sprite frame to the sprite.
   *
   * @param newFrame
   */
  setSpriteFrame(newFrame: CCSpriteFrame | string): void;

  /**
   * Sets the texture of sprite.
   *
   * @param texture
   */
  setTexture(texture: CCTexture2D | string): void;

  /**
   * Sets the weak reference of the cc.TextureAtlas when the sprite is rendered using via cc.SpriteBatchNode.
   *
   * @param textureAtlas
   */
  setTextureAtlas(textureAtlas: CCTextureAtlas): void;

  /**
   * Updates the texture rect of the CCSprite in points.
   *
   * @param rect a rect of texture
   * @param rotated Whether or not the texture is rotated
   * @param untrimmedSize The original pixels size of the texture
   * @param needConvert contentScaleFactor switch
   */
  setTextureRect(rect: CCRect, rotated?: boolean, untrimmedSize?: CCSize, needConvert?: boolean): void;

  /**
   * Set the vertex rect.
   * It will be called internally by setTextureRect.
   * Useful if you want to create 2x images from SD images in Retina Display.
   * Do not call it manually. Use setTextureRect instead.
   * (override this method to generate "double scale" sprites)
   *
   * @param rect
   */
  setVertexRect(rect: CCRect): void;

  /**
   * Sets whether the sprite is visible or not.
   *
   * @param visible
   */
  setVisible(visible: boolean): void;

  /**
   * Sort all children of this sprite node.
   */
  sortAllChildren(): void;

  /**
   * Returns whether the texture have been loaded.
   */
  textureLoaded(): boolean;

  /**
   * Tell the sprite to use batch node render.
   *
   * @param batchNode
   */
  useBatchNode(batchNode: CCSpriteBatchNode): void;
}
