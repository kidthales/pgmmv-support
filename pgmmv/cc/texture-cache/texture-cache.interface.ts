/**
 * Cocos texture cache interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCTexture2D } from '../texture-2d';

/**
 * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D.
 */
export interface CCTextureCache {
  /**
   * Returns a Texture2D object given an ETC filename.
   * If the file image was not previously loaded, it will create a new CCTexture2D
   * object and it will return it. Otherwise it will return a reference of a previously loaded image.
   *
   * Note: addETCImage does not support on HTML5.
   *
   * @param filename
   */
  addETCImage(filename: string): CCTexture2D;

  /**
   * Returns a Texture2D object given an PVR filename.
   * If the file image was not previously loaded, it will create a new Texture2D
   * object and it will return it. Otherwise it will return a reference of a previously loaded image.
   *
   * @param path
   */
  addPVRImage(path: string): CCTexture2D;

  /**
   * Returns a Texture2D object given an PVR filename.
   * If the file image was not previously loaded, it will create a new CCTexture2D
   * object and it will return it. Otherwise it will return a reference of a previously loaded image.
   *
   * Note: AddPVRTCImage does not support on HTML5.
   *
   * @param filename
   */
  addPVRTCImage(filename: string): CCTexture2D;

  /**
   * Returns a Texture2D object given an UIImage image.
   * If the image was not previously loaded, it will create a new Texture2D object and it will return it.
   * Otherwise it will return a reference of a previously loaded image.
   * The "key" parameter will be used as the "key" for the cache.
   * If "key" is null, then a new texture will be created each time.
   *
   * @param image
   * @param key
   */
  addUIImage(image: HTMLCanvasElement | HTMLImageElement, key: string): CCTexture2D;

  /**
   * Cache the image data.
   *
   * @param path
   * @param texture
   */
  cacheImage(path: string, texture: HTMLCanvasElement | HTMLImageElement | CCTexture2D): void;

  /**
   * Description.
   */
  description(): string;

  /**
   * Output to cc.log the current contents of this TextureCache.
   * This will attempt to calculate the size of each texture, and the total texture memory in use.
   */
  dumpCachedTextureInfo(): void;

  /**
   * ```
   * //example
   * var key = cc.textureCache.getKeyByTexture(texture);
   * ```
   *
   * @param texture
   */
  getKeyByTexture(texture: CCTexture2D): string | null;

  /**
   * ```
   * //example
   * var cacheTextureForColor = cc.textureCache.getTextureColors(texture);
   * ```
   *
   * @param texture
   */
  getTextureColors(texture: CCTexture2D): CCColor[];

  /**
   * Returns an already created texture. Returns null if the texture doesn't exist.
   * ```
   * //example
   * var key = cc.textureCache.getTextureForKey("hello.png");
   * ```
   *
   * @param textureKeyName
   */
  getTextureForKey(textureKeyName: string): CCTexture2D | null;

  /**
   * Purges the dictionary of loaded textures.
   * Call this method if you receive the "Memory Warning".
   * In the short term: it will free some resources preventing your app from being killed.
   * In the medium term: it will allocate more resources.
   * In the long term: it will be the same.
   * ```
   * //example
   * cc.textureCache.removeAllTextures();
   */
  removeAllTextures(): void;

  /**
   * Deletes a texture from the cache given a texture.
   *
   * @param texture
   */
  removeTexture(texture: CCTexture2D): void;

  /**
   * Deletes a texture from the cache given a its key name.
   * ```
   * //example
   * cc.textureCache.removeTexture("hello.png");
   * ```
   *
   * @param textureKeyName
   */
  removeTextureForKey(textureKeyName: string): void;

  /**
   * Returns an already created texture. Returns null if the texture doesn't exist.
   * ```
   * //example
   * var key = cc.textureCache.textureForKey("hello.png");
   * ```
   *
   * @param textureKeyName
   */
  textureForKey(textureKeyName: string): CCTexture2D | null;

  /**
   * @param url
   */
  handleLoadedTexture(url: string): void;

  /**
   * Returns a Texture2D object given an file image.
   * If the file image was not previously loaded, it will create a new Texture2D
   * object and it will return it. It will use the filename as a key.
   * Otherwise it will return a reference of a previously loaded image.
   * Supported image extensions: .png, .jpg, .gif
   *
   * ```
   * //example
   * cc.textureCache.addImage("hello.png");
   * ```
   *
   * @param url
   * @param cb
   * @param target
   */
  addImage(url: string, cb?: Function, target?: Record<string, unknown>): CCTexture2D;

  /**
   *
   * @param url
   * @param cb
   * @param target
   */
  addImageAsync(url: string, cb?: Function, target?: Record<string, unknown>): CCTexture2D;
}
