/**
 * Cocos texture atlas interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCTexture2D } from '../texture-2d';
import type { CCV3F_C4B_T2F_Quad } from '../v3f-c4b-t2f-quad';

/**
 * A class that implements a Texture Atlas.
 * Supported features:
 * - The atlas file can be a PNG, JPG.
 * - Quads can be updated in runtime
 * - Quads can be added in runtime
 * - Quads can be removed in runtime
 * - Quads can be re-ordered in runtime
 * - The TextureAtlas capacity can be increased or decreased in runtime.
 */
export interface CCTextureAtlas extends CCClass {
  /**
   * Quantity of quads that can be stored with the current texture atlas size.
   */
  readonly capacity: number;

  /**
   * Indicates whether or not the array buffer of the VBO needs to be updated.
   */
  dirty: boolean;

  /**
   * Quads that are going to be rendered.
   */
  readonly quads: CCV3F_C4B_T2F_Quad[];

  /**
   * Image texture for cc.TextureAtlas.
   */
  texture: CCTexture2D;

  /**
   * Quantity of quads that are going to be drawn.
   */
  readonly totalQuads: number;

  /**
   * Description.
   */
  description(): string;

  /**
   * Draws all the Atlas's Quads.
   */
  drawQuads(): void;

  /**
   * Ensures that after a realloc quads are still empty.
   * Used internally by CCParticleBatchNode.
   *
   * @param index
   * @param amount
   */
  fillWithEmptyQuadsFromIndex(index: number, amount: number): void;

  /**
   * Quantity of quads that can be stored with the current texture atlas size.
   */
  getCapacity(): number;

  /**
   * Quads that are going to be rendered.
   */
  getQuads(): CCV3F_C4B_T2F_Quad[];

  /**
   * Texture of the texture atlas.
   */
  getTexture(): CCTexture2D;

  /**
   * Quantity of quads that are going to be drawn.
   */
  getTotalQuads(): number;

  /**
   * Used internally by CCParticleBatchNode.
   * Don't use this unless you know what you're doing.
   *
   * @param amount
   */
  increaseTotalQuadsWith(amount: number): void;

  /**
   * Initializes a TextureAtlas with a filename and with a certain capacity for Quads.
   * The TextureAtlas capacity can be increased in runtime.
   *
   * WARNING: Do not reinitialize the TextureAtlas because it will leak memory.
   * ```
   * //example
   * var textureAtlas = new cc.TextureAtlas();
   * textureAtlas.initWithTexture("hello.png", 3);
   * ```
   *
   * @param file
   * @param capacity
   */
  initWithFile(file: string, capacity: number): boolean;

  /**
   * Initializes a TextureAtlas with a previously initialized Texture2D object, and
   * with an initial capacity for Quads. The TextureAtlas capacity can be increased in runtime.
   *
   * WARNING: Do not reinitialize the TextureAtlas because it will leak memory.
   *
   * ```
   * //example
   * var texture = cc.textureCache.addImage("hello.png");
   * var textureAtlas = new cc.TextureAtlas();
   * textureAtlas.initWithTexture(texture, 3);
   * ```
   * @param texture
   * @param capacity
   */
  initWithTexture(texture: CCTexture2D, capacity: number): boolean;

  /**
   * Inserts a Quad (texture, vertex and color) at a certain index.
   * Index must be between 0 and the atlas capacity - 1.
   *
   * @param quad
   * @param index
   */
  insertQuad(quad: CCV3F_C4B_T2F_Quad, index: number): void;

  /**
   * Removes the quad that is located at a certain index and inserts it at a new index.
   * This operation is faster than removing and inserting in a quad in 2 different steps.
   *
   * @param fromIndex
   * @param newIndex
   */
  insertQuadFromIndex(fromIndex: number, newIndex: number): void;

  /**
   * Inserts a c array of quads at a given index.
   * Index must be between 0 and the atlas capacity - 1.
   *
   * This method doesn't enlarge the array when amount + index > totalQuads.
   *
   * @param quads
   * @param index
   * @param amount
   */
  insertQuads(quads: CCV3F_C4B_T2F_Quad[], index: number, amount: number): void;

  /**
   * Whether or not the array buffer of the VBO needs to be updated.
   */
  isDirty(): boolean;

  /**
   * Moves an amount of quads from oldIndex at newIndex.
   *
   * @param oldIndex
   * @param amount
   * @param newIndex
   */
  moveQuadsFromIndex(oldIndex: number, amount: number, newIndex: number): void;

  /**
   * Removes all Quads.
   * The TextureAtlas capacity remains untouched. No memory is freed.
   * The total number of quads to be drawn will be 0.
   */
  removeAllQuads(): void;

  /**
   * Removes a quad at a given index number.
   * The capacity remains the same, but the total number of quads to be drawn is reduced in 1.
   *
   * @param index
   */
  removeQuadAtIndex(index: number): void;

  /**
   * Removes a given number of quads at a given index.
   *
   * @param index
   * @param amount
   */
  removeQuadsAtIndex(index: number, amount: number): void;

  /**
   * Resize the capacity of the CCTextureAtlas.
   * The new capacity can be lower or higher than the current one.
   * It returns YES if the resize was successful.
   * If it fails to resize the capacity it will return NO with a new capacity of 0.
   *
   * no used for js
   *
   * @param newCapacity
   */
  resizeCapacity(newCapacity: number): boolean;

  /**
   * Specify if the array buffer of the VBO needs to be updated.
   *
   * @param dirty
   */
  setDirty(dirty: boolean): void;

  /**
   * @param quads
   */
  setQuads(quads: CCV3F_C4B_T2F_Quad[]): void;

  /**
   * @param texture
   */
  setTexture(texture: CCTexture2D): void;

  /**
   * Updates a Quad (texture, vertex and color) at a certain index.
   * Index must be between 0 and the atlas capacity - 1.
   *
   * @param quad
   * @param index
   */
  updateQuad(quad: CCV3F_C4B_T2F_Quad, index: number): void;
}
