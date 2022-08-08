/**
 * Cocos view namespace interface module.
 *
 * @packageDocumentation
 */
import type { CCPoint } from '../point';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';

/**
 * Cocos view namespace interface.
 */
export interface CCViewNamespace {
  /**
   * Returns device pixel ratio for retina display.
   */
  getDevicePixelRatio(): number;

  /**
   * Returns the real location in view for a translation based on a related position
   *
   * @param tx The X axis translation.
   * @param ty The Y axis translation.
   * @param relatedPos The related position object including "left", "top", "width", "height" informations.
   */
  convertToLocationInView(
    tx: number,
    ty: number,
    relatedPos: { left: number; top: number; width: number; height: number }
  ): CCPoint;

  /**
   * Retina support is enabled by default for Apple device but disabled for other devices,
   * it takes effect only when you called setDesignResolutionPolicy.
   * Only useful on web.
   *
   * @param enabled Enable or disable retina display.
   */
  enableRetina(enabled: boolean): void;

  /**
   * Check whether retina display is enabled.
   * Only useful on web.
   */
  isRetinaEnabled(): boolean;

  /**
   * Sets whether the engine modify the "viewport" meta in your web page.
   * It's enabled by default, we strongly suggest you not to disable it.
   * And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden.
   * Only useful on web.
   *
   * @param enabled Enable automatic modification to "viewport" meta.
   */
  adjustViewPort(enabled: boolean): void;

  /**
   * Sets whether resize canvas automatically when browser's size changed.
   * Useful only on web.
   *
   * @param enabled Whether enable automatic resize with browser's resize event.
   */
  resizeWithBrowserSize(enabled: boolean): void;

  /**
   * Sets the callback function for cc.view's resize action,
   * this callback will be invoked before applying resolution policy,
   * so you can do any additional modifications within the callback.
   * Useful only on web.
   *
   * @param callback The callback function.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  setResizeCallback(callback: Function | null): void;

  /**
   * If enabled, the application will try automatically to enter full screen mode on mobile devices
   * You can pass true as parameter to enable it and disable it by passing false.
   * Only useful on web.
   *
   * @param enabled Enable or disable auto full screen on mobile devices.
   */
  enableAutoFullScreen(enabled: boolean): void;

  /**
   * Check whether auto full screen is enabled.
   * Only useful on web.
   */
  isAutoFullScreenEnabled(): boolean;

  /**
   * TODO: cc.ResolutionPolicy typings...
   *
   * @param width
   * @param height
   * @param resolutionPolicy
   */
  _setDesignResolutionSize(width: number, height: number, resolutionPolicy: unknown | number): void;

  /**
   * Sets the resolution policy with designed view size in points.
   * The resolution policy include:
   *  [1] ResolutionExactFit Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.
   *  [2] ResolutionNoBorder Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.
   *  [3] ResolutionShowAll Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.
   *  [4] ResolutionFixedHeight Scale the content's height to screen's height and proportionally scale its width
   *  [5] ResolutionFixedWidth Scale the content's width to screen's width and proportionally scale its height
   *  [cc.ResolutionPolicy] [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy
   * TODO: cc.ResolutionPolicy typings...
   *
   * @param width Design resolution width.
   * @param height Design resolution height.
   * @param resolutionPolicy The resolution policy desired.
   */
  setDesignResolutionSize(width: number, height: number, resolutionPolicy: unknown | number): void;

  /**
   * Sets the document body to desired pixel resolution and fit the game content to it.
   * This function is very useful for adaptation in mobile browsers.
   * In some HD android devices, the resolution is very high, but its browser performance may not be very good.
   * In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
   * But this API can be helpful to set a desired pixel resolution which is in between.
   * This API will do the following:
   *  1. Set viewport's width to the desired width in pixel
   *  2. Set body width to the exact pixel resolution
   *  3. The resolution policy will be reset with designed view size in points.
   * TODO: cc.ResolutionPolicy typings...
   *
   * @param width Design resolution width.
   * @param height Design resolution height.
   * @param resolutionPolicy The resolution policy desired.
   */
  setRealPixelResolution(width: number, height: number, resolutionPolicy: unknown | number): void;

  /**
   * Sets the current resolution policy.
   * TODO: cc.ResolutionPolicy typings...
   *
   * @param resolutionPolicy
   */
  setResolutionPolicy(resolutionPolicy: unknown | number): void;

  /**
   * Returns the canvas size of the view.
   * On native platforms, it returns the screen size since the view is a fullscreen view.
   * On web, it returns the size of the canvas element.
   */
  getCanvasSize(): CCSize;

  /**
   * Returns the visible area size of the view port.
   */
  getVisibleSizeInPixel(): CCSize;

  /**
   * Returns the visible origin of the view port.
   */
  getVisibleOriginInPixel(): CCPoint;

  /**
   * Sets the resolution translate on EGLView.
   *
   * @param offsetLeft
   * @param offsetTop
   */
  setContentTranslateLeftTop(offsetLeft: number, offsetTop: number): void;

  /**
   * Returns the resolution translate on EGLView.
   */
  getContentTranslateLeftTop(): CCSize | object;

  /**
   *
   * @param args
   */
  setFrameZoomFactor(...args: unknown[]): void;

  /**
   * Sets the orientation of the game, it can be landscape, portrait or auto.
   * When set it to landscape or portrait, and screen w/h ratio doesn't fit, cc.view will automatically rotate the game canvas using CSS.
   * Note that this function doesn't have any effect in native, in native, you need to set the application orientation in native project settings.
   *
   * @param orientation Sets the orientation of the game, it can be landscape, portrait or auto.
   * When set it to landscape or portrait, and screen w/h ratio doesn't fit, cc.view will automatically rotate the game canvas using CSS.
   * Note that this function doesn't have any effect in native, in native, you need to set the application orientation in native project settings.
   */
  setOrientation(orientation: number): void;

  /**
   * Sets view's target-densitydpi for android mobile browser. it can be set to:
   *  1. cc.DENSITYDPI_DEVICE, value is "device-dpi"
   *  2. cc.DENSITYDPI_HIGH, value is "high-dpi" (default value)
   *  3. cc.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)
   *  4. cc.DENSITYDPI_LOW, value is "low-dpi"
   *  5. Custom value, e.g: "480"
   *
   * @param densityDPI
   */
  setTargetDensityDPI(densityDPI: string): void;

  /**
   * Returns the current target-densitydpi value of cc.view.
   */
  getTargetDensityDPI(): string;

  /**
   * Returns whether developer can set content's scale factor.
   */
  canSetContentScaleFactor(): boolean;

  /**
   * Force destroying EGL view, subclass must implement this method.
   */
  end(): void;

  /**
   * Returns the designed size for the view. Default resolution size is the same as 'getFrameSize'.
   */
  getDesignResolutionSize(): CCSize;

  /**
   * Returns the frame size of the view.
   * On native platforms, it returns the screen size since the view is a fullscreen view.
   * On web, it returns the size of the canvas's outer DOM element.
   */
  getFrameSize(): CCSize;

  /**
   * Returns the current resolution policy.
   * TODO: cc.ResolutionPolicy typings...
   */
  getResolutionPolicy(): unknown;

  /**
   * Returns scale factor of the horizontal direction (X axis).
   */
  getScaleX(): number;

  /**
   * Returns scale factor of the vertical direction (Y axis).
   */
  getScaleY(): number;

  /**
   * Returns the current scissor rectangle.
   */
  getScissorRect(): CCRect;

  /**
   * Returns the name of the view.
   */
  getViewName(): string;

  /**
   * Returns the view port rectangle.
   */
  getViewPortRect(): CCRect;

  /**
   * Returns the visible origin of the view port.
   */
  getVisibleOrigin(): CCPoint;

  /**
   * Returns the visible area size of the view port.
   */
  getVisibleSize(): CCSize;

  /**
   * Get whether render system is ready(no matter opengl or canvas),
   * this name is for the compatibility with cocos2d-x, subclass must implement this method.
   */
  isOpenGLReady(): boolean;

  /**
   * Returns whether GL_SCISSOR_TEST is enable.
   */
  isScissorEnabled(): boolean;

  /**
   * On native, it sets the frame size of view.
   * On web, it sets the size of the canvas's outer DOM element.
   *
   * @param width
   * @param height
   */
  setFrameSize(width: number, height: number): void;

  /**
   * Open or close IME keyboard , subclass must implement this method.
   *
   * @param isOpen
   */
  setIMEKeyboardState(isOpen: boolean): void;

  /**
   * Sets Scissor rectangle with points.
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  setScissorInPoints(x: number, y: number, w: number, h: number): void;

  /**
   * Sets the name of the view.
   *
   * @param viewName
   */
  setViewName(viewName: string): void;

  /**
   * Sets view port rectangle with points.
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  setViewPortInPoints(x: number, y: number, w: number, h: number): void;

  /**
   * Exchanges the front and back buffers, subclass must implement this method.
   */
  swapBuffers(): void;
}
