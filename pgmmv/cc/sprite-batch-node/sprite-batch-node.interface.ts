/**
 * Cocos sprite batch node interface module.
 *
 * @packageDocumentation
 */
import type { CCBlendFunc } from '../blend-func';
import type { CCNode } from '../node';
import type { CCSprite } from '../sprite';
import type { CCTexture2D } from '../texture-2d';
import type { CCTextureAtlas } from '../texture-atlas';

/**
 *
 * A cc.SpriteBatchNode can reference one and only one texture (one image file, one texture atlas).
 * Only the cc.Sprites that are contained in that texture can be added to the cc.SpriteBatchNode.
 * All cc.Sprites added to a cc.SpriteBatchNode are drawn in one WebGL draw call.
 * If the cc.Sprites are not added to a cc.SpriteBatchNode then an WebGL draw call will be needed for each one, which is less efficient.
 *
 * Limitations:
 * - The only object that is accepted as child (or grandchild, grand-grandchild, etc...) is cc.Sprite or any subclass of cc.Sprite.
 * eg: particles, labels and layer can't be added to a cc.SpriteBatchNode.
 * - Either all its children are Aliased or Antialiased. It can't be a mix.
 * This is because "alias" is a property of the texture, and all the sprites share the same texture.
 *
 * ```
 * // 1. create a SpriteBatchNode with image path
 * var spriteBatchNode = new cc.SpriteBatchNode("res/animations/grossini.png");
 *
 * // 2. create a SpriteBatchNode with texture
 * var texture = cc.textureCache.addImage("res/animations/grossini.png");
 * var spriteBatchNode = new cc.SpriteBatchNode(texture);
 * ```
 */
export interface CCSpriteBatchNode extends CCNode {
  /**
   * Descendants of sprite batch node.
   */
  readonly descendants: CCSprite[];

  /**
   * The texture atlas.
   */
  textureAtlas: CCTextureAtlas;

  /**
   * Add child to the sprite batch node (override addChild of cc.Node).
   *
   * @param child
   * @param zOrder
   * @param tag
   */
  addChild(child: CCSprite, zOrder?: number, tag?: number): void;

  /**
   * Same as addChild.
   *
   * @param child
   * @param z zOrder.
   * @param aTag
   * @deprecated since v3.12
   */
  addSpriteWithoutQuad(child: CCSprite, z?: number, aTag?: number): CCSpriteBatchNode;

  /**
   * Add child at the end.
   *
   * @param sprite
   */
  appendChild(sprite: CCSprite): void;

  /**
   * Returns index for child.
   *
   * @param sprite
   * @deprecated since v3.12
   */
  atlasIndexForChild(sprite: CCSprite): number;

  /**
   * Returns the blending function used for the texture.
   */
  getBlendFunc(): CCBlendFunc;

  /**
   * Return Descendants of cc.SpriteBatchNode.
   *
   * @deprecated since v3.12
   */
  getDescendants(): CCSprite[];

  /**
   * Returns texture of the sprite batch node.
   */
  getTexture(): CCTexture2D;

  /**
   * Return null, no texture atlas is used any more;
   *
   * @deprecated since v3.12
   */
  getTextureAtlas(): CCTextureAtlas | null;

  /**
   * Returns highest atlas index in child.
   *
   * @param sprite
   * @deprecated since v3.12
   */
  highestAtlasIndexInChild(sprite: CCSprite): number;

  /**
   * Do nothing.
   *
   * @deprecated since v3.12
   */
  increaseAtlasCapacity(): void;

  /**
   * Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
   * The capacity will be increased in 33% in runtime if it run out of space.
   * The file will be loaded using the TextureMgr.
   * Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
   *
   * @param fileImage
   * @param capacity
   */
  init(fileImage: string, capacity: number): boolean;

  /**
   * Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
   * The capacity will be increased in 33% in runtime if it run out of space.
   * The file will be loaded using the TextureMgr.
   * Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
   *
   * @param fileImage
   * @param capacity
   */
  initWithFile(fileImage: string, capacity: number): boolean;

  /**
   * Set the texture property.
   *
   * @param tex
   */
  initWithTexture(tex: CCTexture2D): boolean;

  /**
   * Same as addChild(sprite, index).
   *
   * @param sprite The child sprite.
   * @param index The insert index.
   * @deprecated since v3.12
   */
  insertChild(sprite: CCSprite, index: number): void;

  /**
   * Same as addChild(sprite, index).
   *
   * @param sprite
   * @param index
   * @deprecated since v3.12
   */
  insertQuadFromSprite(sprite: CCSprite, index: number): void;

  /**
   * Returns lowest atlas index in child.
   *
   * @param sprite
   * @deprecated since v3.12
   */
  lowestAtlasIndexInChild(sprite: CCSprite): number;

  /**
   * Do nothing.
   *
   * @param pobParent
   * @param index
   * @deprecated since v3.12
   */
  rebuildIndexInOrder(pobParent: CCSprite, index: number): number;

  /**
   * Removes a child given a certain index. It will also cleanup the running actions depending on the cleanup parameter.
   *
   * @param index
   * @param doCleanup
   */
  removeChildAtIndex(index: number, doCleanup: boolean): void;

  /**
   * Same as removeChild.
   *
   * @param sprite
   * @param cleanup Default: true. True if all running actions and callbacks on the child node will be cleanup, false otherwise.
   * @deprecated since v3.12
   */
  removeSpriteFromAtlas(sprite: CCSprite, cleanup?: boolean): void;

  /**
   * Sprites use this to start sortChildren, don't call this manually.
   *
   * @param reorder
   * @deprecated since v3.12
   */
  reorderBatch(reorder: boolean): void;

  /**
   * Sets the source and destination blending function for the texture.
   *
   * @param src
   * @param dst
   */
  setBlendFunc(src: number | CCBlendFunc, dst: number): void;

  /**
   * Sets the texture of the sprite batch node.
   *
   * @param texture
   */
  setTexture(texture: CCTexture2D): void;

  /**
   * TextureAtlas of cc.SpriteBatchNode setter.
   *
   * @param textureAtlas
   * @deprecated since v3.12
   */
  setTextureAtlas(textureAtlas: CCTextureAtlas): void;

  /**
   * Updates a quad at a certain index into the texture atlas. The CCSprite won't be added into the children array.
   * This method should be called only when you are dealing with very big AtlasSrite and when most of the cc.Sprite won't be updated.
   * For example: a tile map (cc.TMXMap) or a label with lots of characters (BitmapFontAtlas).
   *
   * @param sprite
   * @param index
   */
  updateQuadFromSprite(sprite: CCSprite, index: number): void;
}
