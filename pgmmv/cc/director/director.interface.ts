/**
 * Cocos director interface module.
 *
 * @packageDocumentation
 */
import type { CCActionManager } from '../action-manager';
import type { CCClass } from '../class';
import type { CCColor } from '../color';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCScene } from '../scene';
import type { CCScheduler } from '../scheduler';
import type { CCSize } from '../size';
import type { CCViewNamespace } from '../view';

/**
 *  ATTENTION: USE cc.director INSTEAD OF cc.Director.
 *
 * cc.director is a singleton object which manage your game's logic flow.
 * Since the cc.director is a singleton, you don't need to call any constructor
 * or create functions, the standard way to use it is by calling:
 * - cc.director.methodName();
 * It creates and handle the main Window and manages how and when to execute the
 * Scenes.
 *
 * The cc.director is also responsible for:
 * - initializing the OpenGL context
 * - setting the OpenGL pixel format (default on is RGB565)
 * - setting the OpenGL pixel format (default on is RGB565)
 * - setting the OpenGL buffer depth (default one is 0-bit)
 * - setting the color for clear screen (default one is BLACK)
 * - setting the projection (default one is 3D)
 * - setting the orientation (default one is Portrait)
 *
 * The cc.director also sets the default OpenGL context:
 * - GL_TEXTURE_2D is enabled
 * - GL_VERTEX_ARRAY is enabled
 * - GL_COLOR_ARRAY is enabled
 * - GL_TEXTURE_COORD_ARRAY is enabled
 *
 * cc.director also synchronizes timers with the refresh rate of the display.
 *
 * Features and Limitations:
 * - Scheduled timers & drawing are synchronizes with the refresh rate of the display
 * - Only supports animation intervals of 1/60 1/30 & 1/15
 */
export interface CCDirector extends CCClass {
  /**
   * Calculates delta time since last time it was called.
   */
  calculateDeltaTime(): void;

  /**
   * Converts a view coordinate to an WebGL coordinate. Useful to convert
   * (multi) touches coordinates to the current layout (portrait or landscape).
   *
   * Implementation can be found in CCDirectorWebGL.
   *
   * @param uiPoint
   */
  convertToGL(uiPoint: CCPoint): CCPoint;

  /**
   * Converts an WebGL coordinate to a view coordinate. Useful to convert node
   * points to window points for calls such as glScissor.
   *
   * Implementation can be found in CCDirectorWebGL.
   *
   * @param glPoint
   */
  convertToUI(glPoint: CCPoint): CCPoint;

  /**
   * Draw the scene. This method is called every frame. Don't call it manually.
   */
  drawScene(): void;

  /**
   * End the life of director in the next frame.
   */
  end(): void;

  /**
   * Returns the cc.ActionManager associated with this director.
   */
  getActionManager(): CCActionManager;

  /**
   * Returns the FPS value.
   */
  getAnimationInterval(): number;

  /**
   * Returns the size in pixels of the surface. It could be different than the
   * screen size. High-res devices might have a higher surface size than the
   * screen size.
   */
  getContentScaleFactor(): number;

  /**
   * Returns the cc.director delegate.
   */
  getDelegate(): unknown;

  /**
   * Returns the delta time since last frame.
   */
  getDeltaTime(): number;

  /**
   * This object will be visited after the main scene is visited. This object
   * MUST implement the "visit" selector. Useful to hook a notification object.
   */
  getNotificationNode(): CCNode;

  /**
   * Get the CCEGLView, where everything is rendered. Implementation can be
   * found in CCDirectorCanvas.js/CCDirectorWebGL.js.
   */
  getOpenGLView(): CCViewNamespace;

  /**
   * Sets an OpenGL projection. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   */
  getProjection(): number;

  /**
   * Returns current running Scene. Director can only run one Scene at the time.
   */
  getRunningScene(): CCScene;

  /**
   * Returns the cc.Scheduler associated with this director.
   */
  getScheduler(): CCScheduler;

  /**
   * Returns seconds per frame.
   */
  getSecondsPerFrame(): number;

  /**
   * Returns how many frames were called since the director started.
   */
  getTotalFrames(): number;

  /**
   * Returns the visible origin of the running scene.
   */
  getVisibleOrigin(): CCPoint;

  /**
   * Returns the visible size of the running scene.
   */
  getVisibleSize(): CCSize;

  /**
   * Returns the size of the WebGL view in points. It takes into account any
   * possible rotation (device orientation) of the window.
   */
  getWinSize(): CCSize;

  /**
   * Returns the size of the OpenGL view in pixels. It takes into account any
   * possible rotation (device orientation) of the window. On Mac winSize and
   * winSizeInPixels return the same value.
   */
  getWinSizeInPixels(): CCSize;

  /**
   * Returns the z eye, only available in WebGL mode.
   */
  getZEye(): number;

  /**
   * Returns whether or not to display the FPS informations.
   */
  isDisplayStats(): boolean;

  /**
   * Returns whether next delta time equals to zero.
   */
  isNextDeltaTimeZero(): boolean;

  /**
   * Returns whether or not the Director is paused.
   */
  isPaused(): boolean;

  /**
   * Returns whether or not the replaced scene will receive the cleanup message.
   * If the new scene is pushed, then the old scene won't receive the "cleanup"
   * message. If the new scene replaces the old one, the it will receive the
   * "cleanup" message.
   */
  isSendCleanupToScene(): boolean;

  /**
   * Run main loop of director.
   */
  mainLoop(): void;

  /**
   * Pause the director's ticker.
   */
  pause(): void;

  /**
   * Pops out a scene from the queue. This scene will replace the running one.
   * The running scene will be deleted. If there are no more scenes in the stack
   * the execution is terminated. ONLY call it if there is a running scene.
   */
  popScene(): void;

  /**
   * Pops out all scenes from the queue until the root scene in the queue. This
   * scene will replace the running one. Internally it will call
   * "popToSceneStackLevel(1)".
   */
  popToRootScene(): void;

  /**
   * Pops out all scenes from the queue until it reaches "level". If level is 0,
   * it will end the director. If level is 1, it will pop all scenes until it
   * reaches to root scene. If level is <= than the current stack level, it
   * won't do anything.
   *
   * @param level
   */
  popToSceneStackLevel(level: number): void;

  /**
   * Removes cached all cocos2d cached data. It will purge the cc.textureCache,
   * cc.spriteFrameCache, cc.animationCache.
   */
  purgeCachedData(): void;

  /**
   * Purge the cc.director itself, including unschedule all schedule, remove all
   * event listeners, clean up and exit the running scene, stops all animations,
   * clear cached data.
   */
  purgeDirector(): void;

  /**
   * Suspends the execution of the running scene, pushing it on the stack of
   * suspended scenes. The new scene will be executed. Try to avoid big stacks
   * of pushed scenes to reduce memory allocation. ONLY call it if there is a
   * running scene.
   *
   * @param scene
   */
  pushScene(scene: CCScene): void;

  /**
   * Resume director after pause, if the current scene is not paused, nothing
   * will happen.
   */
  resume(): void;

  /**
   * Run a scene. Replaces the running scene with a new one or enter the first
   * scene.
   *
   * @param scene
   */
  runScene(scene: CCScene): void;

  /**
   * Sets the cc.ActionManager associated with this director.
   *
   * @param actionManager
   */
  setActionManager(actionManager: CCActionManager): void;

  /**
   * Enables/disables OpenGL alpha blending. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   *
   * @param on
   */
  setAlphaBlending(on: boolean): void;

  /**
   * Sets animation interval.
   *
   * @param value The animation interval desired.
   */
  setAnimationInterval(value: number): void;

  /**
   * Set color for clear screen. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   *
   * @param clearColor
   */
  setClearColor(clearColor: CCColor): void;

  /**
   * The size in pixels of the surface. It could be different than the screen
   * size. High-res devices might have a higher surface size than the screen
   * size.
   *
   * @param scaleFactor
   */
  setContentScaleFactor(scaleFactor: number): void;

  /**
   * Sets the default values based on the CCConfiguration info.
   */
  setDefaultValues(): void;

  /**
   * Sets the cc.director delegate. It shall implement the CCDirectorDelegate
   * protocol.
   *
   * @param delegate
   */
  setDelegate(delegate: unknown): void;

  /**
   * Enables or disables WebGL depth test. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   *
   * @param on
   */
  setDepthTest(on: boolean): void;

  /**
   * Sets whether display the FPS on the bottom-left corner.
   *
   * @param displayStats
   */
  setDisplayStats(displayStats: boolean): void;

  /**
   * Sets whether next delta time equals to zero.
   *
   * @param nextDeltaTimeZero
   */
  setNextDeltaTimeZero(nextDeltaTimeZero: boolean): void;

  /**
   * Starts the registered next scene.
   */
  setNextScene(): void;

  /**
   * Sets Notification Node.
   *
   * @param node
   */
  setNotificationNode(node: CCNode): void;

  /**
   * Sets the view, where everything is rendered, do not call this function.
   * Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js.
   *
   * @param openGLView
   */
  setOpenGLView(openGLView: CCViewNamespace): void;

  /**
   * Sets an OpenGL projection. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   *
   * @param projection
   */
  setProjection(projection: number): void;

  /**
   * Sets the cc.Scheduler associated with this director.
   *
   * @param scheduler
   */
  setScheduler(scheduler: CCScheduler): void;

  /**
   * Update the view port. Implementation can be found in
   * CCDirectorCanvas.js/CCDirectorWebGL.js.
   */
  setViewport(): void;

  /**
   * Starts animation.
   */
  startAnimation(): void;

  /**
   * Stops animation.
   */
  stopAnimation(): void;
}
