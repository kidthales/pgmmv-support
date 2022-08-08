/**
 * Cocos texture 2D interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCGLProgram } from '../gl-program';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';

/**
 * This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.
 * The created cc.Texture2D object will always have power-of-two dimensions.
 * Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions
 * i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).
 * Be aware that the content of the generated textures will be upside-down!
 */
export interface CCTexture2D extends CCClass {
  /**
   * Content height in points.
   */
  height: number;

  /**
   * Texture max S.
   */
  maxS: number;

  /**
   * Texture max T.
   */
  maxT: number;

  /**
   * WebGLTexture object.
   * TODO: What is WebGLTexture type...?
   */
  readonly name: unknown;

  /**
   * Pixel format of the texture.
   */
  readonly pixelFormat: number;

  /**
   * Height in pixels.
   */
  readonly pixelsHeight: number;

  /**
   * Width in pixels.
   */
  readonly pixelsWidth: number;

  /**
   * The shader program used by drawAtPoint and drawInRect.
   */
  shaderProgram: CCGLProgram;

  /**
   * Content width in points.
   */
  width: number;

  /**
   * Get width in pixels.
   */
  getPixelsWide(): number;

  /**
   * Get height in pixels.
   */
  getPixelsHigh(): number;

  /**
   * Get content size.
   */
  getContentSize(): CCSize;

  /**
   * Get content size in pixels.
   */
  getContentSizeInPixels(): CCSize;

  /**
   * Init with HTML element.
   *
   * @param element
   */
  initWithElement(element: HTMLCanvasElement | HTMLImageElement): void;

  /**
   * HTMLElement Object getter.
   */
  getHtmlElementObj(): HTMLCanvasElement | HTMLImageElement;

  /**
   * Check whether texture is loaded.
   */
  isLoaded(): boolean;

  /**
   * Handle loaded texture.
   */
  handleLoadedTexture(): void;

  /**
   * Description of cc.Texture2D
   */
  description(): string;

  /**
   * @param data
   * @param pixelFormat
   * @param pixelsWide
   * @param pixelsHigh
   * @param contentSize
   */
  initWithData(
    data: unknown,
    pixelFormat: number,
    pixelsWide: number,
    pixelsHigh: number,
    contentSize: number
  ): boolean;

  /**
   * @param uiImage
   */
  initWithImage(uiImage: unknown): boolean;

  /**
   * @param text
   * @param fontName
   * @param fontSize
   * @param dimensions
   * @param hAlignment
   * @param vAlignment
   */
  initWithString(
    text: string,
    fontName: string,
    fontSize: number,
    dimensions: unknown,
    hAlignment: unknown,
    vAlignment: unknown
  ): boolean;

  /**
   *
   */
  releaseTexture(): void;

  /**
   *
   */
  getName(): string | null;

  /**
   *
   */
  getMaxS(): number;

  /**
   *
   * @param maxS
   */
  setMaxS(maxS: number): void;

  /**
   *
   */
  getMaxT(): number;

  /**
   *
   * @param maxT
   */
  setMaxT(maxT: number): void;

  /**
   *
   */
  getPixelFormat(): unknown;

  /**
   *
   */
  getShaderProgram(): CCGLProgram;

  /**
   * @param shaderProgram
   */
  setShaderProgram(shaderProgram: CCGLProgram): void;

  /**
   *
   */
  hasPremultipliedAlpha(): boolean;

  /**
   *
   */
  hasMipmaps(): boolean;

  /**
   * @param data
   */
  releaseData(data: unknown): void;

  /**
   * @param data
   * @param length
   */
  keepData(data: unknown, length: number): unknown;

  /**
   * @param point
   */
  drawAtPoint(point: CCPoint): void;

  /**
   * @param rect
   */
  drawInRect(rect: CCRect): void;

  /**
   * Init with ETC file.
   *
   * @param file
   * @warning does not support on HTML5
   */
  initWithETCFile(file: string): boolean;

  /**
   * Init with PVR file.
   *
   * @param file
   * @warning does not support on HTML5
   */
  initWithPVRFile(file: string): boolean;

  /**
   * Init with PVRTC data.
   *
   * @param data
   * @param level
   * @param bpp
   * @param hasAlpha
   * @param length
   * @param pixelFormat
   * @warning does not support on HTML5
   */
  initWithPVRTCData(
    data: unknown,
    level: unknown,
    bpp: unknown,
    hasAlpha: boolean,
    length: number,
    pixelFormat: number
  ): boolean;

  /**
   * @param texParams
   * @param magFilter
   * @param wrapS
   * @param wrapT
   */
  setTexParameters(
    texParams: { wrapS?: number; wrapT?: number },
    magFilter?: unknown,
    wrapS?: number,
    wrapT?: number
  ): void;

  /**
   *
   */
  setAntiAliasTexParameters(): void;

  /**
   *
   */
  setAliasTexParameters(): void;

  /**
   *
   */
  generateMipmap(): void;

  /**
   *
   */
  stringForFormat(): string;

  /**
   *
   * @param format
   */
  bitsPerPixelForFormat(format: number): number;

  /**
   * Add listener for loaded event.
   *
   * @param callback
   * @param target
   * @deprecated since 3.1, please use addEventListener instead
   */
  addLoadedEventListener(callback: Function, target: CCNode): void;

  /**
   * Remove listener from listeners by target.
   *
   * @param target
   */
  removeLoadedEventListener(target: CCNode): void;
}
