/**
 * Cocos render texture interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCColor } from '../color';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSprite } from '../sprite';

/**
 * cc.RenderTexture is a generic rendering target. To render things into it,
 * simply construct a render target, call begin on it, call visit on any cocos
 * scenes or objects to render them, and call end. For convenience, render
 * texture adds a sprite as it's display child with the results, so you can
 * simply add the render texture to your scene and treat it like any other
 * CocosNode. There are also functions for saving the render texture to disk in
 * PNG or JPG format.
 */
export interface CCRenderTexture extends CCNode {
  /**
   * Indicate auto draw mode activate or not.
   */
  autoDraw: boolean;

  /**
   * Clear color value, valid only when "autoDraw" is true.
   */
  clearColorVal: CCColor;

  /**
   * Clear depth value.
   */
  clearDepthVal: number;

  /**
   * Code for "auto" update.
   *
   * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT,
   * GL_STENCIL_BUFFER_BIT. They can be OR'ed.
   */
  clearFlags: number;

  /**
   * Clear stencil value.
   */
  clearStencilVal: number;

  /**
   * The sprite.
   */
  sprite: CCSprite;

  /**
   * Starts grabbing.
   */
  begin(): void;

  /**
   * Starts rendering to the texture while clearing the texture first. This is
   * more efficient then calling clear() first and then begin().
   *
   * @param r Red 0-255.
   * @param g Green 0-255.
   * @param b Blue 0-255.
   * @param a Alpha 0-255. 0 is transparent.
   * @param depthValue
   * @param stencilValue
   */
  beginWithClear(r: number, g: number, b: number, a: number, depthValue?: number, stencilValue?: number): void;

  /**
   *  Clear RenderTexture.
   */
  cleanup(): void;

  /**
   * Clears the texture with a color.
   *
   * @param r Red 0-255.
   * @param g Green 0-255.
   * @param b Blue 0-255.
   * @param a Alpha 0-255.
   */
  clear(r: number, g: number, b: number, a: number): void;

  /**
   * Clears the texture with a specified depth value.
   *
   * @param depthValue
   */
  clearDepth(depthValue: number): void;

  /**
   * Clears the texture with rect.
   *
   * @param x
   * @param y
   * @param width
   * @param height
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * Clears the texture with a specified stencil value.
   *
   * @param stencilValue
   */
  clearStencil(stencilValue: number): void;

  /**
   * Ends grabbing.
   */
  end(): void;

  /**
   * Clear color value. Valid only when "autoDraw" is true.
   */
  getClearColor(): CCColor;

  /**
   * Value for clearDepth. Valid only when autoDraw is true.
   */
  getClearDepth(): number;

  /**
   * Valid flags: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT,
   * GL_STENCIL_BUFFER_BIT. They can be OR'ed. Valid when "autoDraw is YES.
   */
  getClearFlags(): number;

  /**
   * Value for clear Stencil. Valid only when autoDraw is true.
   */
  getClearStencil(): number;

  /**
   * Gets the sprite.
   */
  getSprite(): CCSprite;

  /**
   * Initializes the instance of cc.RenderTexture.
   *
   * @param width
   * @param height
   * @param format cc.IMAGE_FORMAT_JPEG|cc.IMAGE_FORMAT_PNG|cc.IMAGE_FORMAT_RAWDATA
   * @param depthStencilFormat
   */
  initWithWidthAndHeight(width: number, height: number, format?: number, depthStencilFormat?: number): boolean;

  /**
   * When enabled, it will render its children into the texture automatically.
   * Disabled by default for compatibility reasons. Will be enabled in the
   * future.
   */
  isAutoDraw(): boolean;

  /**
   * Listen "come to background" message, and save render texture. It only has
   * effect on Android.
   *
   * @param obj
   */
  listenToBackground(obj: CCClass): void;

  /**
   * Listen "come to foreground" message and restore the frame buffer object. It
   * only has effect on Android.
   *
   * @param obj
   */
  listenToForeground(obj: CCClass): void;

  /**
   * Creates a new CCImage from with the texture's data. Caller is responsible
   * for releasing it by calling delete.
   *
   * @param flipImage
   */
  newCCImage(flipImage: any): any;

  /**
   * Saves the texture into a file using JPEG format. The file will be saved in
   * the Documents folder. Returns YES if the operation is successful. (Doesn't
   * support in HTML5).
   *
   * @param filePath
   * @param format
   */
  saveToFile(filePath: string, format: number): void;

  /**
   * When enabled, it will render its children into the texture automatically.
   * Disabled by default for compatibility reasons. Will be enabled in the
   * future.
   *
   * @param autoDraw
   */
  setAutoDraw(autoDraw: boolean): boolean;

  /**
   * Set the clear color value. Valid only when "autoDraw" is true.
   *
   * @param clearColor
   */
  setClearColor(clearColor: CCColor): void;

  /**
   * Set value for clearDepth. Valid only when autoDraw is true.
   *
   * @param clearDepth
   */
  setClearDepth(clearDepth: number): void;

  /**
   * Set the clearFlags.
   *
   * @param clearFlags
   */
  setClearFlags(clearFlags: number): void;

  /**
   * Set value for clear Stencil. Valid only when autoDraw is true.
   *
   * @param clearStencil
   */
  setClearStencil(clearStencil: number): number;

  /**
   * Set the sprite.
   *
   * @param sprite
   */
  setSprite(sprite: CCSprite): void;

  /**
   * Used for grab part of screen to a texture.
   *
   * @param rtBegin
   * @param fullRect
   * @param fullViewport
   */
  setVirtualViewport(rtBegin: CCPoint, fullRect: CCRect, fullViewport: CCRect): void;
}
