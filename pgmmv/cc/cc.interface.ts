/**
 * Cocos interface module.
 *
 * @packageDocumentation
 */
import type { UnionToIntersection } from 'type-fest';

import type { CCAccelerationConstructor } from './acceleration';
import type { CCActionConstructor } from './action';
import type { CCActionInterval, CCActionIntervalConstructor } from './action-interval';
import type { CCActionManagerConstructor } from './action-manager';
import type { CCAffineTransform, CCAffineTransformConstructor } from './affine-transform';
import type { CCAsyncNamespace } from './async';
import type { CCAsyncPoolConstructor } from './async-pool';
import type { CCBlendFunc, CCBlendFuncConstructor } from './blend-func';
import type { CCClassConstructor } from './class';
import type { CCColor, CCColorConstructor } from './color';
import type { CCComponentConstructor } from './component';
import type { CCDirector, CCDirectorConstructor } from './director';
import type { CCDrawNodeConstructor } from './draw-node';
import type { CCEventConstructor } from './event';
import type { CCEventListenerConstructor } from './event-listener';
import type { CCEventManager, CCEventManagerConstructor } from './event-manager';
import type { CCFadeIn, CCFadeInConstructor } from './fade-in';
import type { CCFadeOut, CCFadeOutConstructor } from './fade-out';
import type { CCFadeTo, CCFadeToConstructor } from './fade-to';
import type { CCFiniteTimeAction, CCFiniteTimeActionConstructor } from './finite-time-action';
import type { CCFontDefinitionConstructor } from './font-definition';
import type { CCGameNamespace } from './game';
import type { CCGLProgramConstructor } from './gl-program';
import type { CCGridBase, CCGridBaseConstructor } from './grid-base';
import type { CCLabelTTFConstructor } from './label-ttf';
import type { CCLayerConstructor } from './layer';
import type { CCLoaderNamespace } from './loader';
import type { CCMathNamespace } from './math';
import type { CCMenuConstructor } from './menu';
import type { CCMenuItemConstructor } from './menu-item';
import type { CCMenuItemAtlasFontConstructor } from './menu-item-atlas-font';
import type { CCMenuItemFontConstructor } from './menu-item-font';
import type { CCMenuItemImageConstructor } from './menu-item-image';
import type { CCMenuItemLabelConstructor } from './menu-item-label';
import type { CCMenuItemSpriteConstructor } from './menu-item-sprite';
import type { CCMenuItemToggleConstructor } from './menu-item-toggle';
import type { CCMenuPassiveConstructor } from './menu-passive';
import type { CCNode, CCNodeConstructor } from './node';
import type { CCPathNamespace } from './path';
import type { CCPoint, CCPointConstructor } from './point';
import type { CCQuad2Constructor } from './quad-2';
import type { CCQuad3Constructor } from './quad-3';
import type { CCRect, CCRectConstructor } from './rect';
import type { CCRenderTextureConstructor } from './render-texture';
import type { CCRepeat, CCRepeatConstructor } from './repeat';
import type { CCScale9SpriteConstructor } from './scale-9-sprite';
import type { CCSceneConstructor } from './scene';
import type { CCSchedulerConstructor } from './scheduler';
import type { CCScrollViewConstructor } from './scroll-view';
import type { CCSequence, CCSequenceConstructor } from './sequence';
import type { CCSize, CCSizeConstructor } from './size';
import type { CCSpriteConstructor } from './sprite';
import type { CCSpriteBatchNodeConstructor } from './sprite-batch-node';
import type { CCSpriteFrameConstructor } from './sprite-frame';
import type { CCSysNamespace } from './sys';
import type { CCTex2F, CCTex2FConstructor } from './tex-2f';
import type { CCTexture2DConstructor } from './texture-2d';
import type { CCTextureAtlasConstructor } from './texture-atlas';
import type { CCTextureCache, CCTextureCacheConstructor } from './texture-cache';
import type { CCTouchConstructor } from './touch';
import type { CCV2F_C4B_T2FConstructor } from './v2f-c4b-t2f';
import type { CCV2F_C4B_T2F_TriangleConstructor } from './v2f-c4b-t2f-triangle';
import type { CCV3F_C4B_T2FConstructor } from './v3f-c4b-t2f';
import type { CCV3F_C4B_T2F_Quad, CCV3F_C4B_T2F_QuadConstructor } from './v3f-c4b-t2f-quad';
import type { CCVertex2F, CCVertex2FConstructor } from './vertex-2f';
import type { CCVertex3F, CCVertex3FConstructor } from './vertex-3f';
import type { CCViewNamespace } from './view';

/**
 * Cocos interface.
 */
export interface cc {
  /**
   * Acceleration.
   */
  Acceleration: CCAccelerationConstructor;

  /**
   * Action.
   */
  Action: CCActionConstructor;

  /**
   * An interval action is an action that takes place within a certain period of time.
   * ```
   * // example
   * var actionInterval = cc.actionInterval(3);
   * ```
   *
   * @param d Duration in seconds.
   */
  actionInterval(d: number): CCActionInterval;

  /**
   * Action interval.
   */
  ActionInterval: CCActionIntervalConstructor;

  /**
   * Action manager.
   */
  ActionManager: CCActionManagerConstructor;

  /**
   * Affine transform.
   */
  AffineTransform: CCAffineTransformConstructor;

  /**
   * Concatenate a transform matrix to another and return the result: t' = t1 * t2.
   *
   * @param t1
   * @param t2
   */
  affineTransformConcat(t1: CCAffineTransform, t2: CCAffineTransform): CCAffineTransform;

  /**
   * Concatenate a transform matrix to another.
   * The results are reflected in the first matrix.
   * t' = t1 * t2.
   *
   * @param t1
   * @param t2
   */
  affineTransformConcatIn(t1: CCAffineTransform, t2: CCAffineTransform): CCAffineTransform;

  /**
   * Return true if an affine transform equals to another, false otherwise.
   *
   * @param t1
   * @param t2
   */
  affineTransformEqualToTransform(t1: CCAffineTransform, t2: CCAffineTransform): boolean;

  /**
   * Get the invert transform of an AffineTransform object.
   *
   * @param t
   */
  affineTransformInvert(t: CCAffineTransform): CCAffineTransform;

  /**
   * Create a cc.AffineTransform object with all contents in the matrix.
   *
   * @param a
   * @param b
   * @param c
   * @param d
   * @param tx
   * @param ty
   */
  affineTransformMake(a: number, b: number, c: number, d: number, tx: number, ty: number): CCAffineTransform;

  /**
   * Create a identity transformation matrix.
   */
  affineTransformMakeIdentity(): CCAffineTransform;

  /**
   * Create a identity transformation matrix.
   *
   * @deprecated since v3.0, please use cc.affineTransformMakeIdentity() instead.
   */
  affineTransformIdentity(): CCAffineTransform;

  /**
   * Create a new affine transformation with a base transformation matrix and a rotation based on it.
   *
   * @param aTransform The base affine transform object.
   * @param anAngle The angle to rotate.
   */
  affineTransformRotate(aTransform: CCAffineTransform, anAngle: number): CCAffineTransform;

  /**
   * Create a new affine transformation with a base transformation matrix and a scale based on it.
   *
   * @param t The base affine transform object.
   * @param sx The scale on x axis.
   * @param sy The scale on y axis.
   */
  affineTransformScale(t: CCAffineTransform, sx: number, sy: number): CCAffineTransform;

  /**
   * Create a new affine transformation with a base transformation matrix and a translation based on it.
   *
   * @param t The base affine transform object.
   * @param tx The translation on x axis.
   * @param ty The translation on y axis.
   */
  affineTransformTranslate(t: CCAffineTransform, tx: number, ty: number): CCAffineTransform;

  /**
   *
   * @param jsobj
   * @param superclass_or_instance
   */
  associateWithNative(jsobj: unknown, superclass_or_instance: unknown): void;

  /**
   * Async.
   */
  async: CCAsyncNamespace;

  /**
   * Async pool.
   */
  AsyncPool: CCAsyncPoolConstructor;

  /**
   *
   * @param me
   * @param opt_methodName
   * @param var_args
   */
  base<T>(me: unknown, opt_methodName: string, ...var_args: unknown[]): T;

  /**
   * Blend function.
   */
  BlendFunc: CCBlendFuncConstructor;

  /**
   * Blend function disable.
   */
  blendFuncDisable(): CCBlendFunc;

  /**
   * Check webgl error.Error will be shown in console if exists.
   */
  checkGLErrorDebug(): void;

  /**
   * Clamp a value between from and to.
   *
   * @param value
   * @param min_inclusive
   * @param max_inclusive
   */
  clampf(value: number, min_inclusive: number, max_inclusive: number): number;

  /**
   * Class.
   */
  Class: CCClassConstructor;

  /**
   * Color.
   */
  Color: CCColorConstructor;

  /**
   * Generate a color object based on multiple forms of parameters.
   *
   * ```
   * // 1. All channels separately as parameters
   * var color1 = cc.color(255, 255, 255, 255);
   *
   * // 2. Convert a hex string to a color
   * var color2 = cc.color('#000000');
   *
   * // 3. An color object as parameter
   * var color3 = cc.color({r: 255, g: 255, b: 255, a: 255});
   * ```
   *
   * Alpha channel is optional. Default value is 255
   *
   * @param r
   * @param g
   * @param b
   * @param a
   */
  color(r: number | string | CCColor, g?: number, b?: number, a?: number): CCColor;

  /**
   * Returns true if both ccColor3B are equal. Otherwise it returns false.
   *
   * @param color1
   * @param color2
   */
  colorEqual(color1: CCColor, color2: CCColor): boolean;

  /**
   * Convert Color to a string of color for style. e.g. cc.color(255,6,255) to : '#ff06ff'.
   *
   * @param color
   */
  colorToHex(color: CCColor): string;

  /**
   *
   */
  Component: CCComponentConstructor;

  /**
   *
   */
  container: unknown | null;

  /**
   * On Mac it returns 1;
   * On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1.
   */
  contentScaleFactor(): number;

  /**
   * Common getter setter configuration function.
   *
   * @param proto
   * @param prop
   * @param getter
   * @param setter
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  defineGetterSetter(proto: unknown, prop: string, getter: Function, setter: Function): void;

  /**
   * Converts degrees to radians.
   *
   * @param angle
   */
  degreesToRadians(angle: number): number;

  /**
   *
   */
  DENSITYDPI_DEVICE: 'device-dpi';

  /**
   *
   */
  DENSITYDPI_HIGH: 'high-dpi';

  /**
   *
   */
  DENSITYDPI_MEDIUM: 'medium-dpi';

  /**
   *
   */
  DENSITYDPI_LOW: 'low-dpi';

  /**
   * Disable default GL states:
   *  - GL_TEXTURE_2D
   *  - GL_TEXTURE_COORD_ARRAY
   *  - GL_COLOR_ARRAY
   */
  disableDefaultGLStates(): void;

  /**
   * Director singleton.
   */
  director: CCDirector;

  /**
   * Director.
   */
  Director: CCDirectorConstructor;

  /**
   * Draw node.
   */
  DrawNode: CCDrawNodeConstructor;

  /**
   * Iterate over an object or an array, executing a function for each matched element.
   *
   * @param obj
   * @param iterator
   * @param context
   */
  each<T>(
    obj: T,
    iterator: (value: unknown, index: T extends Array<unknown> ? number : string) => boolean,
    context?: unknown
  ): void;

  /**
   * GL states that are enabled:
   * - GL_TEXTURE_2D
   * - GL_VERTEX_ARRAY
   * - GL_TEXTURE_COORD_ARRAY
   * - GL_COLOR_ARRAY
   */
  enableDefaultGLStates(): void;

  /**
   * Copy all of the properties in source objects to target object and return the target object.
   *
   * @param target
   * @param sources
   */
  extend<T, U>(target: T, ...sources: U[]): T & UnionToIntersection<U>;

  /**
   * Event.
   */
  Event: CCEventConstructor;

  /**
   * Event listener.
   */
  EventListener: CCEventListenerConstructor;

  /**
   * Event manager singleton.
   */
  eventManager: CCEventManager;

  /**
   * Event manager.
   */
  EventManager: CCEventManagerConstructor;

  /**
   * Fades In an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 0 to 255.
   * ```
   * //example
   * var action = cc.fadeIn(1.0);
   * ```
   *
   * @param duration Duration in seconds.
   */
  fadeIn(duration: number): CCFadeIn;

  /**
   * Fade in.
   */
  FadeIn: CCFadeInConstructor;

  /**
   * Fades Out an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 255 to 0.
   * ```
   * // example
   * var action = cc.fadeOut(1.0);
   * ```
   *
   * @param duration Duration in seconds.
   */
  fadeOut(duration: number): CCFadeOut;

  /**
   * Fade out.
   */
  FadeOut: CCFadeOutConstructor;

  /**
   * Fades an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from the current value to a custom one.
   * ```
   * // example
   * var action = cc.fadeTo(1.0, 0);
   * ```
   *
   * @param duration
   * @param opacity 0-255, 0 is transparent.
   */
  fadeTo(duration: number, opacity: number): CCFadeTo;

  /**
   * Fade to.
   */
  FadeTo: CCFadeToConstructor;

  /**
   * Finite time action.
   */
  FiniteTimeAction: CCFiniteTimeActionConstructor;

  /**
   * Font definition.
   */
  FontDefinition: CCFontDefinitionConstructor;

  /**
   * A string tool to construct a string with format string.
   * For example:
   *
   * ```
   * cc.formatStr('a: %d, b: %b', a, b); cc.formatStr(a, b, c);
   * ```
   * @param args
   */
  formatStr(...args: string[]): string;

  /**
   *
   * @param x
   * @param y
   */
  _g(x: number, y: number): CCGridBase;

  /**
   *
   */
  g_NumberOfDraws: number;

  /**
   * Game namespace.
   */
  game: CCGameNamespace;

  /**
   * GL program.
   */
  GLProgram: CCGLProgramConstructor;

  /**
   * Grid base.
   */
  GridBase: CCGridBaseConstructor;

  /**
   * Convert a string of color for style to Color. e.g. '#ff06ff' to : cc.color(255,6,255).
   *
   * @param hex
   */
  hexToColor(hex: string): CCColor;

  /**
   * Increments the GL Draws counts by one.
   *
   * @param addNumber
   */
  incrementGLDraws(addNumber: number): void;

  /**
   * Another way to subclass: Using Google Closure.
   * @param childCtor
   * @param parentCtor
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  inherits(childCtor: Function, parentCtor: Function): void;

  /**
   * Check the obj whether is array or not.
   *
   * @param obj
   */
  isArray(obj: unknown): boolean;

  /**
   * Check the url whether cross origin.
   *
   * @param url
   */
  isCrossOrigin(url: string): boolean;

  /**
   * Check the obj whether is function or not.
   *
   * @param obj
   */
  isFunction(obj: unknown): boolean;

  /**
   * Check the obj whether is number or not.
   *
   * @param obj
   */
  isNumber(obj: unknown): boolean;

  /**
   * Check the obj whether is object or not.
   *
   * @param obj
   */
  isObject(obj: unknown): boolean;

  /**
   * Check the obj whether is string or not.
   *
   * @param obj
   */
  isString(obj: unknown): boolean;

  /**
   * Check the obj whether is undefined or not.
   *
   * @param obj
   */
  isUndefined(obj: unknown): boolean;

  /**
   * Label TTF.
   */
  LabelTTF: CCLabelTTFConstructor;

  /**
   * Layer.
   */
  Layer: CCLayerConstructor;

  /**
   * Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end.
   *
   * ```
   * cc.lerp(2, 10, 0.5); // returns 6
   * cc.lerp(2, 10, 0.2); // returns 3.6
   * ```
   * @param a Number A
   * @param b Number B
   * @param r Ration between 0 and 1.
   */
  lerp(a: number, b: number, r: number): number;

  /**
   * Loader.
   */
  loader: CCLoaderNamespace;

  /**
   * Math.
   */
  math: CCMathNamespace;

  /**
   * Menu.
   */
  Menu: CCMenuConstructor;

  /**
   * Menu item.
   */
  MenuItem: CCMenuItemConstructor;

  /**
   * Menu item atlas font.
   */
  MenuItemAtlasFont: CCMenuItemAtlasFontConstructor;

  /**
   * Menu item font.
   */
  MenuItemFont: CCMenuItemFontConstructor;

  /**
   * Menu item image.
   */
  MenuItemImage: CCMenuItemImageConstructor;

  /**
   * Menu item label.
   */
  MenuItemLabel: CCMenuItemLabelConstructor;

  /**
   * Menu item sprite.
   */
  MenuItemSprite: CCMenuItemSpriteConstructor;

  /**
   * Menu item toggle.
   */
  MenuItemToggle: CCMenuItemToggleConstructor;

  /**
   * Menu passive.
   */
  MenuPassive: CCMenuPassiveConstructor;

  /**
   * Node.
   */
  Node: CCNodeConstructor;

  /**
   * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix.
   *
   * @param node
   */
  nodeDrawSetup(node: CCNode): void;

  /**
   * Helper function that creates a cc.Point.
   *
   * ```
   * var point1 = cc.p();
   * var point2 = cc.p(100, 100);
   * var point3 = cc.p(point2);
   * var point4 = cc.p({x: 100, y: 100});
   * ```
   *
   * @param x A number or point object.
   * @param y
   */
  p(x?: number | CCPoint, y?: number): CCPoint;

  /**
   *
   * @param x
   * @param y
   */
  _p(x: number, y: number): CCPoint;

  /**
   * Adds one point to another (inplace).
   *
   * @param v1
   * @param v2
   */
  pAddIn(v1: CCPoint, v2: CCPoint): void;

  /**
   * The angle in radians between two vector directions.
   *
   * @param a
   * @param b
   */
  pAngle(a: CCPoint, b: CCPoint): number;

  /**
   * The signed angle in radians between two vector directions.
   *
   * @param a
   * @param b
   */
  pAngleSigned(a: CCPoint, b: CCPoint): number;

  /**
   * Path namespace.
   */
  path: CCPathNamespace;

  /**
   * Multiplies a and b components, a.x*b.x, a.y*b.y.
   *
   * @param a
   * @param b
   */
  pCompMult(a: CCPoint, b: CCPoint): CCPoint;

  /**
   * Run a math operation function on each point component
   * Math.abs, Math.fllor, Math.ceil, Math.round.
   *
   * ```
   * // For example: let's try to take the floor of x,y
   * var p = cc.pCompOp(cc.p(10,10), Math.abs);
   * ```
   *
   * @param p
   * @param opFunc
   */
  pCompOp(p: CCPoint, opFunc: (n: number) => number): CCPoint;

  /**
   * Converts radians to a normalized vector.
   *
   * @param a
   */
  pForAngle(a: number): CCPoint;

  /**
   * Quickly convert cc.Size to a cc.Point
   *
   * @param s
   */
  pFromSize(s: CCSize): CCPoint;

  /**
   * If points have fuzzy equality which means equal with some degree of variance.
   *
   * @param a
   * @param b
   * @param variance
   */
  pFuzzyEqual(a: CCPoint, b: CCPoint, variance: number): boolean;

  /**
   * Copies the position of one point to another.
   *
   * @param v1
   * @param v2
   */
  pIn(v1: CCPoint, v2: CCPoint): void;

  /**
   * Return the intersection point of line A-B, C-D.
   *
   * @param A
   * @param B
   * @param C
   * @param D
   */
  pIntersectPoint(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint): CCPoint;

  /**
   * Linear Interpolation between two points a and b alpha == 0 ? a alpha == 1 ? b otherwise a value between a..b.
   *
   * @param a
   * @param b
   * @param alpha
   */
  pLerp(a: CCPoint, b: CCPoint, alpha: number): CCPoint;

  /**
   * A general line-line intersection test indicating successful intersection of a line.
   * Note that to truly test intersection for segments we have to make
   * sure that s & t lie within [0..1] and for rays, make sure s & t > 0
   * the hit point is p3 + t * (p4 - p3);
   * the hit point also is p1 + s * (p2 - p1);
   *
   * @param A A is the startpoint for the first line P1 = (p1 - p2).
   * @param B B is the endpoint for the first line P1 = (p1 - p2).
   * @param C C is the startpoint for the second line P2 = (p3 - p4).
   * @param D D is the endpoint for the second line P2 = (p3 - p4).
   * @param retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)),
   * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
   */
  pLineIntersect(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint, retP: CCPoint): boolean;

  /**
   * Multiplies the point with the given factor (inplace).
   *
   * @param point
   * @param floatVar
   */
  pMultIn(point: CCPoint, floatVar: number): void;

  /**
   * Normalizes the point (inplace).
   *
   * @param v
   */
  pNormalizeIn(v: CCPoint): CCPoint;

  /**
   *
   */
  Point: CCPointConstructor;

  /**
   * Check whether a point's value equals to another.
   *
   * @param point1
   * @param point2
   */
  pointEqualToPoint(point1: CCPoint, point2: CCPoint): boolean;

  /**
   * Converts a Point in pixels to points.
   *
   * @param pixels
   */
  pointPixelsToPoints(pixels: CCPoint): CCPoint;

  /**
   *
   * @param pixels
   * @param outPoint
   */
  _pointPixelsToPointsOut(pixels: CCPoint, outPoint: CCPoint): void;

  /**
   * Converts a Point in points to pixels.
   *
   * @param points
   */
  pointPointsToPixels(points: CCPoint): CCPoint;

  /**
   *
   */
  PointZero(): CCPoint;

  /**
   * Rotates a point counter clockwise by the angle around a pivot.
   *
   * @param v The point to rotate.
   * @param pivot Pivot point.
   * @param angle Angle of rotation cw in radians.
   */
  pRotateByAngle(v: CCPoint, pivot: CCPoint, angle: number): CCPoint;

  /**
   * Check to see if both points are equal.
   *
   * @param A
   * @param B
   */
  pSameAs(A: CCPoint, B: CCPoint): boolean;

  /**
   * Return YES if Segment A-B intersects with segment C-D.
   *
   * @param A
   * @param B
   * @param C
   * @param D
   */
  pSegmentIntersect(A: CCPoint, B: CCPoint, C: CCPoint, D: CCPoint): boolean;

  /**
   * Subtracts one point from another (inplace).
   *
   * @param v1
   * @param v2
   */
  pSubIn(v1: CCPoint, v2: CCPoint): void;

  /**
   * Converts a vector to radians.
   *
   * @param v
   */
  pToAngle(v: CCPoint): number;

  /**
   * Unrotates two points.
   *
   * @param v1
   * @param v2
   */
  pUnrotate(v1: CCPoint, v2: CCPoint): CCPoint;

  /**
   * Sets the position of the point to 0.
   *
   * @param v
   */
  pZeroIn(v: CCPoint): void;

  /**
   * Quad 2.
   */
  Quad2: CCQuad2Constructor;

  /**
   * Quad 3.
   */
  Quad3: CCQuad3Constructor;

  /**
   * Converts radians to degrees.
   *
   * @param angle
   */
  radiansToDegrees(angle: number): number;

  /**
   * Get a random number from 0 to 0xffffff.
   */
  rand(): number;

  /**
   * Returns a random float between 0 and 1.
   */
  random0To1(): number;

  /**
   * Returns a random float between -1 and 1.
   */
  randomMinus1To1(): number;

  /**
   *
   */
  Rect: CCRectConstructor;

  /**
   * Helper function that creates a cc.Rect.
   *
   * ```
   * var rect1 = cc.rect();
   * var rect2 = cc.rect(100,100,100,100);
   * var rect3 = cc.rect(rect2);
   * var rect4 = cc.rect({x: 100, y: 100, width: 100, height: 100});
   * ```
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  rect(x?: number | CCRect, y?: number, w?: number, h?: number): CCRect;

  /**
   *
   * @param x
   * @param y
   * @param w
   * @param h
   */
  _rect(x: number, y: number, w: number, h: number): CCRect;

  /**
   * Check whether a rect contains a point.
   *
   * @param rect
   * @param point
   */
  rectContainsPoint(rect: CCRect, point: CCPoint): boolean;

  /**
   * Check whether the rect1 contains rect2.
   *
   * @param rect1
   * @param rect2
   */
  rectContainsRect(rect1: CCRect, rect2: CCRect): boolean;

  /**
   * Check whether a rect's value equals to another.
   *
   * @param rect1
   * @param rect2
   */
  rectEqualToRect(rect1: CCRect, rect2: CCRect): boolean;

  /**
   * Returns the rightmost x-value of a rect.
   *
   * @param rect
   */
  rectGetMaxX(rect: CCRect): number;

  /**
   * Return the topmost y-value of a rect.
   * @param rect
   */
  rectGetMaxY(rect: CCRect): number;

  /**
   * Return the midpoint x-value of a rect.
   *
   * @param rect
   */
  rectGetMidX(rect: CCRect): number;

  /**
   * Return the midpoint y-value of `rect'.
   *
   * @param rect
   */
  rectGetMidY(rect: CCRect): number;

  /**
   * Returns the leftmost x-value of a rect.
   *
   * @param rect
   */
  rectGetMinX(rect: CCRect): number;

  /**
   * Return the bottommost y-value of a rect.
   *
   * @param rect
   */
  rectGetMinY(rect: CCRect): number;

  /**
   * Returns the overlapping portion of 2 rectangles.
   *
   * @param rectA
   * @param rectB
   */
  rectIntersection(rectA: CCRect, rectB: CCRect): CCRect;

  /**
   * Check whether a rect intersect with another.
   *
   * @param rectA
   * @param rectB
   */
  rectIntersectsRect(rectA: CCRect, rectB: CCRect): boolean;

  /**
   * Converts a rect in pixels to points.
   *
   * @param pixel
   */
  rectPixelsToPoints(pixel: CCRect): CCRect;

  /**
   * Converts a rect in points to pixels.
   *
   * @param point
   */
  rectPointsToPixels(point: CCRect): CCRect;

  /**
   * Check whether a rect overlaps another.
   *
   * @param rectA
   * @param rectB
   */
  rectOverlapsRect(rectA: CCRect, rectB: CCRect): boolean;

  /**
   * Returns the smallest rectangle that contains the two source rectangles.
   *
   * @param rectA
   * @param rectB
   */
  rectUnion(rectA: CCRect, rectB: CCRect): CCRect;

  /**
   * Rect zero.
   */
  RectZero(): CCRect;

  /**
   * Render texture.
   */
  RenderTexture: CCRenderTextureConstructor;

  /**
   * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30).
   * ```
   * // example
   * var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
   * ```
   *
   * @param action
   * @param times
   */
  repeat(action: CCFiniteTimeAction, times: number): CCRepeat;

  /**
   * Repeat.
   */
  Repeat: CCRepeatConstructor;

  /**
   *
   */
  _reuse_color3b: {
    r: number;
    g: number;
    b: number;
  };

  /**
   *
   */
  _reuse_color4b: {
    r: number;
    g: number;
    b: number;
    a: number;
  };

  /**
   *
   */
  _reuse_p: CCPoint[];

  /**
   *
   */
  _reuse_p_index: number;

  /**
   *
   */
  _reuse_rect: CCRect;

  /**
   *
   */
  _reuse_size: CCSize;

  /**
   *
   */
  s_globalOrderOfArrival: number;

  /**
   * Scale 9 sprite.
   */
  Scale9Sprite: CCScale9SpriteConstructor;

  /**
   * Scene.
   */
  Scene: CCSceneConstructor;

  /**
   * Scheduler.
   */
  Scheduler: CCSchedulerConstructor;

  /**
   * Scroll view.
   */
  ScrollView: CCScrollViewConstructor;

  /**
   * Helper constructor to create an array of sequenceable actions.
   * ```
   * // example
   * // create sequence with actions
   * var seq = cc.sequence(act1, act2);
   *
   * // create sequence with array
   * var seq = cc.sequence(actArray);
   * todo: It should be use new
   * ```
   *
   * @param tempArray
   * @param actionTwo
   */
  sequence(tempArray: CCFiniteTimeAction | CCFiniteTimeAction[], actionTwo?: CCFiniteTimeAction): CCSequence;

  /**
   * Sequence.
   */
  Sequence: CCSequenceConstructor;

  /**
   * Size.
   */
  Size: CCSizeConstructor;

  /**
   * Helper function that creates a cc.Size.
   *
   * ```
   * var size1 = cc.size();
   * var size2 = cc.size(100,100);
   * var size3 = cc.size(size2);
   * var size4 = cc.size({width: 100, height: 100});
   * ```
   * @param w
   * @param h
   */
  size(w?: number | CCSize, h?: number): CCSize;

  /**
   *
   * @param w
   * @param h
   */
  _size(w: number, h: number): CCSize;

  /**
   * Check whether a point's value equals to another.
   *
   * @param size1
   * @param size2
   */
  sizeEqualToSize(size1: CCSize, size2: CCSize): boolean;

  /**
   * Converts a size in pixels to points.
   *
   * @param sizeInPixels
   */
  sizePixelsToPoints(sizeInPixels: CCSize): CCSize;

  /**
   *
   * @param sizeInPixels
   * @param outSize
   */
  _sizePixelsToPointsOut(sizeInPixels: CCSize, outSize: CCSize): void;

  /**
   * Converts a Size in points to pixels.
   *
   * @param sizeInPoints
   */
  sizePointsToPixels(sizeInPoints: CCSize): CCSize;

  /**
   * Size zero.
   */
  SizeZero(): CCSize;

  /**
   * Sprite.
   */
  Sprite: CCSpriteConstructor;

  /**
   * Sprite batch node.
   */
  SpriteBatchNode: CCSpriteBatchNodeConstructor;

  /**
   * Sprite frame.
   */
  SpriteFrame: CCSpriteFrameConstructor;

  /**
   * Stencil bits.
   */
  stencilBits: number;

  /**
   * System namespace.
   */
  sys: CCSysNamespace;

  /**
   * Simple macro that swaps 2 variables
   * modified from c++ macro, you need to pass in the x and y variables names in string,
   * and then a reference to the whole object as third variable.
   *
   * @param x
   * @param y
   * @param ref
   * @deprecated since v3.0
   */
  swap(x: string, y: string, ref: object): void;

  /**
   * Helper macro that creates an Tex2F type: A texcoord composed of 2 floats: u, y.
   *
   * @param u
   * @param v
   */
  tex2(u: number, v: number): CCTex2F;

  /**
   * Tex 2F.
   */
  Tex2F: CCTex2FConstructor;

  /**
   * Texture 2D.
   */
  Texture2D: CCTexture2DConstructor;

  /**
   * Texture atlas.
   */
  TextureAtlas: CCTextureAtlasConstructor;

  /**
   * Texture cache.
   */
  TextureCache: CCTextureCacheConstructor;

  /**
   * Texture cache singleton.
   */
  textureCache: CCTextureCache;

  /**
   * Touch.
   */
  Touch: CCTouchConstructor;

  /**
   * V2F C4B T2F.
   */
  V2F_C4B_T2F: CCV2F_C4B_T2FConstructor;

  /**
   * V2F C4B T2F triangle.
   */
  V2F_C4B_T2F_Triangle: CCV2F_C4B_T2F_TriangleConstructor;

  /**
   * V3F C4B T2F.
   */
  V3F_C4B_T2F: CCV3F_C4B_T2FConstructor;

  /**
   * V3F C4B T2F quad.
   */
  V3F_C4B_T2F_Quad: CCV3F_C4B_T2F_QuadConstructor;

  /**
   * V3F C4B T2F quad copy.
   *
   * @param sourceQuad
   */
  V3F_C4B_T2F_QuadCopy(sourceQuad: CCV3F_C4B_T2F_Quad): CCV3F_C4B_T2F_Quad;

  /**
   * V3F C4B T2F quads copy.
   *
   * @param sourceQuads
   */
  V3F_C4B_T2F_QuadsCopy(sourceQuads: CCV3F_C4B_T2F_Quad[]): CCV3F_C4B_T2F_Quad[];

  /**
   * V3F C4B T2F quad zero.
   */
  V3F_C4B_T2F_QuadZero(): CCV3F_C4B_T2F_Quad;

  /**
   * Helper macro that creates an Vertex2F type composed of 2 floats: x, y.
   *
   * @param x
   * @param y
   */
  vertex2(x: number, y: number): CCVertex2F;

  /**
   * Vertex 2F.
   */
  Vertex2F: CCVertex2FConstructor;

  /**
   * Helper macro that creates an Vertex3F type composed of 3 floats: x, y, z.
   *
   * @param x
   * @param y
   * @param z
   */
  vertex3(x: number, y: number, z: number): CCVertex3F;

  /**
   * Vertex 3F.
   */
  Vertex3F: CCVertex3FConstructor;

  /**
   * View namespace.
   */
  view: CCViewNamespace;

  /**
   * Window size namespace.
   */
  winSize: {
    /**
     *
     */
    width: number;

    /**
     *
     */
    height: number;
  };

  /**
   *
   */
  readonly FLT_EPSILON: 1.192092896e-7;

  /**
   *
   */
  readonly REPEAT_FOREVER: 4294967295;

  /**
   *
   */
  readonly TMX_ORIENTATION_HEX: 1;

  /**
   *
   */
  readonly TMX_ORIENTATION_ISO: 2;

  /**
   *
   */
  readonly TMX_ORIENTATION_ORTHO: 0;

  /**
   *
   */
  readonly Z_COMPRESSION_BZIP2: 1;

  /**
   *
   */
  readonly Z_COMPRESSION_GZIP: 2;

  /**
   *
   */
  readonly Z_COMPRESSION_NONE: 3;

  /**
   *
   */
  readonly Z_COMPRESSION_ZLIB: 0;

  /**
   *
   */
  readonly BLEND_DST: 771;

  /**
   *
   */
  readonly BLEND_SRC: 770;

  /**
   *
   */
  readonly DIRECTOR_IOS_USE_BACKGROUND_THREAD: 0;

  /**
   *
   */
  readonly DIRECTOR_MAC_THREAD: 0;

  /**
   *
   */
  readonly DIRECTOR_STATS_INTERVAL: 0.1;

  /**
   *
   */
  readonly ENABLE_BOX2_D_INTEGRATION: 0;

  /**
   *
   */
  readonly ENABLE_DEPRECATED: 1;

  /**
   *
   */
  readonly ENABLE_GL_STATE_CACHE: 1;

  /**
   *
   */
  readonly ENABLE_PROFILERS: 0;

  /**
   *
   */
  readonly ENABLE_STACKABLE_ACTIONS: 1;

  /**
   *
   */
  readonly FIX_ARTIFACTS_BY_STRECHING_TEXEL: 0;

  /**
   *
   */
  readonly GL_ALL: 0;

  /**
   *
   */
  readonly LABELATLAS_DEBUG_DRAW: 0;

  /**
   *
   */
  readonly LABELBMFONT_DEBUG_DRAW: 0;

  /**
   *
   */
  readonly MAC_USE_DISPLAY_LINK_THREAD: 0;

  /**
   *
   */
  readonly MAC_USE_MAIN_THREAD: 2;

  /**
   *
   */
  readonly MAC_USE_OWN_THREAD: 1;

  /**
   *
   */
  readonly NODE_RENDER_SUBPIXEL: 1;

  /**
   *
   */
  readonly PVRMIPMAP_MAX: 16;

  /**
   *
   */
  readonly SPRITEBATCHNODE_RENDER_SUBPIXEL: 1;

  /**
   *
   */
  readonly SPRITE_DEBUG_DRAW: 0;

  /**
   *
   */
  readonly TEXTURE_ATLAS_USE_TRIANGLE_STRIP: 0;

  /**
   *
   */
  readonly TEXTURE_ATLAS_USE_VAO: 0;

  /**
   *
   */
  readonly USE_L_A88_LABELS: 1;

  /**
   *
   */
  readonly ACTION_TAG_INVALID: -1;

  /**
   *
   */
  readonly DEVICE_MAC: 6;

  /**
   *
   */
  readonly DEVICE_MAC_RETINA_DISPLAY: 7;

  /**
   *
   */
  readonly DEVICEI_PAD: 4;

  /**
   *
   */
  readonly DEVICEI_PAD_RETINA_DISPLAY: 5;

  /**
   *
   */
  readonly DEVICEI_PHONE: 0;

  /**
   *
   */
  readonly DEVICEI_PHONE5: 2;

  /**
   *
   */
  readonly DEVICEI_PHONE5_RETINA_DISPLAY: 3;

  /**
   *
   */
  readonly DEVICEI_PHONE_RETINA_DISPLAY: 1;

  /**
   *
   */
  readonly FILE_UTILS_SEARCH_DIRECTORY_MODE: 1;

  /**
   *
   */
  readonly FILE_UTILS_SEARCH_SUFFIX_MODE: 0;

  /**
   *
   */
  readonly FLIPED_ALL: 3758096384;

  /**
   *
   */
  readonly FLIPPED_MASK: 536870911;

  /**
   *
   */
  readonly IMAGE_FORMAT_JPEG: 0;

  /**
   *
   */
  readonly IMAGE_FORMAT_PNG: 1;

  /**
   *
   */
  readonly ITEM_SIZE: 32;

  /**
   *
   */
  readonly LABEL_AUTOMATIC_WIDTH: -1;

  /**
   *
   */
  readonly LINE_BREAK_MODE_CHARACTER_WRAP: 1;

  /**
   *
   */
  readonly LINE_BREAK_MODE_CLIP: 2;

  /**
   *
   */
  readonly LINE_BREAK_MODE_HEAD_TRUNCATION: 3;

  /**
   *
   */
  readonly LINE_BREAK_MODE_MIDDLE_TRUNCATION: 5;

  /**
   *
   */
  readonly LINE_BREAK_MODE_TAIL_TRUNCATION: 4;

  /**
   *
   */
  readonly LINE_BREAK_MODE_WORD_WRAP: 0;

  /**
   *
   */
  readonly MAC_VERSION_10_6: 168165376;

  /**
   *
   */
  readonly MAC_VERSION_10_7: 168230912;

  /**
   *
   */
  readonly MAC_VERSION_10_8: 168296448;

  /**
   *
   */
  readonly MENU_HANDLER_PRIORITY: -128;

  /**
   *
   */
  readonly MENU_STATE_TRACKING_TOUCH: 1;

  /**
   *
   */
  readonly MENU_STATE_WAITING: 0;

  /**
   *
   */
  readonly NODE_TAG_INVALID: -1;

  /**
   *
   */
  readonly PRIORITY_NON_SYSTEM_MIN: -2147483647;

  /**
   *
   */
  readonly RESOLUTION_MAC: 1;

  /**
   *
   */
  readonly RESOLUTION_MAC_RETINA_DISPLAY: 2;

  /**
   *
   */
  readonly RESOLUTION_UNKNOWN: 0;

  /**
   *
   */
  readonly TMX_TILE_DIAGONAL_FLAG: 536870912;

  /**
   *
   */
  readonly TMX_TILE_HORIZONTAL_FLAG: 2147483648;

  /**
   *
   */
  readonly TMX_TILE_VERTICAL_FLAG: 1073741824;

  /**
   *
   */
  readonly TEXT_ALIGNMENT_CENTER: 1;

  /**
   *
   */
  readonly TEXT_ALIGNMENT_RIGHT: 2;

  /**
   *
   */
  readonly TEXT_ALIGNMENT_LEFT: 0;

  /**
   *
   */
  readonly VERTICAL_TEXT_ALIGNMENT_TOP: 0;

  /**
   *
   */
  readonly VERTICAL_TEXT_ALIGNMENT_CENTER: 1;

  /**
   *
   */
  readonly VERTICAL_TEXT_ALIGNMENT_BOTTOM: 2;

  /**
   *
   */
  readonly TOUCHES_ALL_AT_ONCE: 0;

  /**
   *
   */
  readonly TOUCHES_ONE_BY_ONE: 1;

  /**
   *
   */
  readonly TRANSITION_ORIENTATION_DOWN_OVER: 1;

  /**
   *
   */
  readonly TRANSITION_ORIENTATION_LEFT_OVER: 0;

  /**
   *
   */
  readonly TRANSITION_ORIENTATION_RIGHT_OVER: 1;

  /**
   *
   */
  readonly TRANSITION_ORIENTATION_UP_OVER: 0;

  /**
   *
   */
  readonly UNIFORM_COS_TIME: 5;

  /**
   *
   */
  readonly UNIFORM_MV_MATRIX: 1;

  /**
   *
   */
  readonly UNIFORM_MVP_MATRIX: 2;

  /**
   *
   */
  readonly UNIFORM_P_MATRIX: 0;

  /**
   *
   */
  readonly UNIFORM_RANDOM01: 6;

  /**
   *
   */
  readonly UNIFORM_SAMPLER: 7;

  /**
   *
   */
  readonly UNIFORM_SIN_TIME: 4;

  /**
   *
   */
  readonly UNIFORM_TIME: 3;

  /**
   *
   */
  readonly UNIFORM_MAX: 8;

  /**
   *
   */
  readonly OS_VERSION_4_0: 67108864;

  /**
   *
   */
  readonly OS_VERSION_4_0_1: 67109120;

  /**
   *
   */
  readonly OS_VERSION_4_1: 67174400;

  /**
   *
   */
  readonly OS_VERSION_4_2: 67239936;

  /**
   *
   */
  readonly OS_VERSION_4_2_1: 67240192;

  /**
   *
   */
  readonly OS_VERSION_4_3: 67305472;

  /**
   *
   */
  readonly OS_VERSION_4_3_1: 67305728;

  /**
   *
   */
  readonly OS_VERSION_4_3_2: 67305984;

  /**
   *
   */
  readonly OS_VERSION_4_3_3: 67306240;

  /**
   *
   */
  readonly OS_VERSION_4_3_4: 67306496;

  /**
   *
   */
  readonly OS_VERSION_4_3_5: 67306752;

  /**
   *
   */
  readonly OS_VERSION_5_0: 83886080;

  /**
   *
   */
  readonly OS_VERSION_5_0_1: 83886336;

  /**
   *
   */
  readonly OS_VERSION_5_1_0: 83951616;

  /**
   *
   */
  readonly OS_VERSION_6_0_0: 100663296;

  /**
   *
   */
  readonly ANIMATION_FRAME_DISPLAYED_NOTIFICATION: 'CCAnimationFrameDisplayedNotification';

  /**
   *
   */
  readonly CHIPMUNK_IMPORT: 'chipmunk.h';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_COLOR: 'a_color';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_POSITION: 'a_position';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_TEX_COORD: 'a_texCoord';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_TEX_COORD1: 'a_texCoord1';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_TEX_COORD2: 'a_texCoord2';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_TEX_COORD3: 'a_texCoord3';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_NORMAL: 'a_normal';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_BLEND_WEIGHT: 'a_blendWeight';

  /**
   *
   */
  readonly ATTRIBUTE_NAME_BLEND_INDEX: 'a_blendIndex';

  /**
   *
   */
  readonly ENGINE_VERSION: 'Cocos2d-JS v3.15';

  /**
   *
   */
  readonly DIRECTOR_STATS_POSITION: {
    /**
     *
     */
    readonly x: 0;

    /**
     *
     */
    readonly y: 0;
  };

  /**
   *
   */
  readonly DIRECTOR_FPS_INTERVAL: 0.5;

  /**
   *
   */
  readonly COCOSNODE_RENDER_SUBPIXEL: 1;

  /**
   *
   */
  readonly OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA: 0;

  /**
   *
   */
  readonly TEXTURE_NPOT_SUPPORT: 0;

  /**
   *
   */
  readonly RETINA_DISPLAY_SUPPORT: 1;

  /**
   *
   */
  readonly RETINA_DISPLAY_FILENAME_SUFFIX: '-hd';

  /**
   *
   */
  readonly USE_LA88_LABELS: 1;

  /**
   *
   */
  readonly SPRITEBATCHNODE_DEBUG_DRAW: 0;

  /**
   *
   */
  readonly IS_RETINA_DISPLAY_SUPPORTED: 1;

  /**
   *
   */
  readonly DEFAULT_ENGINE: 'Cocos2d-JS v3.15-native';

  /**
   *
   */
  readonly ResolutionPolicy: {
    /**
     *
     */
    readonly EXACT_FIT: 0;

    /**
     *
     */
    readonly NO_BORDER: 1;

    /**
     *
     */
    readonly SHOW_ALL: 2;

    /**
     *
     */
    readonly FIXED_HEIGHT: 3;

    /**
     *
     */
    readonly FIXED_WIDTH: 4;

    /**
     *
     */
    readonly UNKNOWN: 5;
  };

  /**
   *
   */
  readonly LANGUAGE_ENGLISH: 0;

  /**
   *
   */
  readonly LANGUAGE_CHINESE: 1;

  /**
   *
   */
  readonly LANGUAGE_FRENCH: 2;

  /**
   *
   */
  readonly LANGUAGE_ITALIAN: 3;

  /**
   *
   */
  readonly LANGUAGE_GERMAN: 4;

  /**
   *
   */
  readonly LANGUAGE_SPANISH: 5;

  /**
   *
   */
  readonly LANGUAGE_RUSSIAN: 6;

  /**
   *
   */
  readonly LANGUAGE_KOREAN: 7;

  /**
   *
   */
  readonly LANGUAGE_JAPANESE: 8;

  /**
   *
   */
  readonly LANGUAGE_HUNGARIAN: 9;

  /**
   *
   */
  readonly LANGUAGE_PORTUGUESE: 10;

  /**
   *
   */
  readonly LANGUAGE_ARABIC: 11;

  /**
   *
   */
  readonly DEVICE_ORIENTATION_PORTRAIT: 0;

  /**
   *
   */
  readonly DEVICE_ORIENTATION_LANDSCAPE_LEFT: 1;

  /**
   *
   */
  readonly DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN: 2;

  /**
   *
   */
  readonly DEVICE_ORIENTATION_LANDSCAPE_RIGHT: 3;

  /**
   *
   */
  readonly DEVICE_MAX_ORIENTATIONS: 2;

  /**
   *
   */
  readonly IMAGE_FORMAT_RAWDATA: 2;

  /**
   *
   */
  readonly TOUCH_ALL_AT_ONCE: 0;

  /**
   *
   */
  readonly TOUCH_ONE_BY_ONE: 1;

  /**
   *
   */
  readonly RED: {
    /**
     *
     */
    readonly r: 255;

    /**
     *
     */
    readonly g: 0;

    /**
     *
     */
    readonly b: 0;
  };

  /**
   *
   */
  readonly GREEN: {
    /**
     *
     */
    readonly r: 0;

    /**
     *
     */
    readonly g: 255;

    /**
     *
     */
    readonly b: 0;
  };

  /**
   *
   */
  readonly BLUE: {
    /**
     *
     */
    readonly r: 0;

    /**
     *
     */
    readonly g: 0;

    /**
     *
     */
    readonly b: 255;
  };

  /**
   *
   */
  readonly BLACK: {
    /**
     *
     */
    readonly r: 0;

    /**
     *
     */
    readonly g: 0;

    /**
     *
     */
    readonly b: 0;
  };

  /**
   *
   */
  readonly WHITE: {
    /**
     *
     */
    readonly r: 255;

    /**
     *
     */
    readonly g: 255;

    /**
     *
     */
    readonly b: 255;
  };

  /**
   *
   */
  readonly YELLOW: {
    /**
     *
     */
    readonly r: 255;

    /**
     *
     */
    readonly g: 255;

    /**
     *
     */
    readonly b: 0;
  };

  /**
   *
   */
  readonly POINT_ZERO: {
    /**
     *
     */
    readonly x: 0;

    /**
     *
     */
    readonly y: 0;
  };

  /**
   *
   */
  readonly PARTICLE_DEFAULT_CAPACITY: 500;

  /**
   *
   */
  readonly DEFAULT_PADDING: 5;

  /**
   *
   */
  readonly ONE: 1;

  /**
   *
   */
  readonly ZERO: 0;

  /**
   *
   */
  readonly SRC_ALPHA: 770;

  /**
   *
   */
  readonly SRC_ALPHA_SATURATE: 776;

  /**
   *
   */
  readonly SRC_COLOR: 768;

  /**
   *
   */
  readonly DST_ALPHA: 772;

  /**
   *
   */
  readonly DST_COLOR: 774;

  /**
   *
   */
  readonly ONE_MINUS_SRC_ALPHA: 771;

  /**
   *
   */
  readonly ONE_MINUS_SRC_COLOR: 769;

  /**
   *
   */
  readonly ONE_MINUS_DST_ALPHA: 773;

  /**
   *
   */
  readonly ONE_MINUS_DST_COLOR: 775;

  /**
   *
   */
  readonly ONE_MINUS_CONSTANT_ALPHA: 32772;

  /**
   *
   */
  readonly ONE_MINUS_CONSTANT_COLOR: 32770;

  /**
   *
   */
  readonly LINEAR: 9729;

  /**
   *
   */
  readonly REPEAT: 10497;

  /**
   *
   */
  readonly CLAMP_TO_EDGE: 33071;

  /**
   *
   */
  readonly MIRRORED_REPEAT: 33648;

  /**
   *
   */
  readonly VERTEX_ATTRIB_FLAG_NONE: 0;

  /**
   *
   */
  readonly VERTEX_ATTRIB_FLAG_POSITION: 1;

  /**
   *
   */
  readonly VERTEX_ATTRIB_FLAG_COLOR: 2;

  /**
   *
   */
  readonly VERTEX_ATTRIB_FLAG_TEX_COORDS: 4;

  /**
   *
   */
  readonly VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: 7;

  /**
   *
   */
  readonly VERTEX_ATTRIB_POSITION: 0;

  /**
   *
   */
  readonly VERTEX_ATTRIB_COLOR: 1;

  /**
   *
   */
  readonly VERTEX_ATTRIB_TEX_COORDS: 2;

  /**
   *
   */
  readonly VERTEX_ATTRIB_MAX: 3;

  /**
   *
   */
  readonly UNIFORM_PMATRIX: 0;

  /**
   *
   */
  readonly UNIFORM_MVMATRIX: 1;

  /**
   *
   */
  readonly UNIFORM_MVPMATRIX: 2;

  /**
   *
   */
  readonly UNIFORM_SINTIME: 4;

  /**
   *
   */
  readonly UNIFORM_COSTIME: 5;

  /**
   *
   */
  readonly UNIFORM_TIME_S: 'CC_Time';

  /**
   *
   */
  readonly UNIFORM_COS_TIME_S: 'CC_CosTime';

  /**
   *
   */
  readonly UNIFORM_COSTIME_S: 'CC_CosTime';

  /**
   *
   */
  readonly UNIFORM_SIN_TIME_S: 'CC_SinTime';

  /**
   *
   */
  readonly UNIFORM_SINTIME_S: 'CC_SinTime';

  /**
   *
   */
  readonly UNIFORM_PMATRIX_S: 'CC_PMatrix';

  /**
   *
   */
  readonly UNIFORM_MVMATRIX_S: 'CC_MVMatrix';

  /**
   *
   */
  readonly UNIFORM_MVPMATRIX_S: 'CC_MVPMatrix';

  /**
   *
   */
  readonly UNIFORM_P_MATRIX_S: 'CC_PMatrix';

  /**
   *
   */
  readonly UNIFORM_MV_MATRIX_S: 'CC_MVMatrix';

  /**
   *
   */
  readonly UNIFORM_MVP_MATRIX_S: 'CC_MVPMatrix';

  /**
   *
   */
  readonly UNIFORM_RANDOM01_S: 'CC_Random01';

  /**
   *
   */
  readonly UNIFORM_SAMPLER_S: 'CC_Texture0';

  /**
   *
   */
  readonly UNIFORM_ALPHA_TEST_VALUE_S: 'CC_AlphaValue';

  /**
   *
   */
  readonly CURRENT_ITEM: 3233828865;

  /**
   *
   */
  readonly ZOOM_ACTION_TAG: 3233828866;

  /**
   *
   */
  readonly NORMAL_TAG: 8801;

  /**
   *
   */
  readonly SELECTED_TAG: 8802;

  /**
   *
   */
  readonly DISABLE_TAG: 8803;

  /**
   *
   */
  readonly TMX_PROPERTY_NONE: 0;

  /**
   *
   */
  readonly TMX_PROPERTY_MAP: 1;

  /**
   *
   */
  readonly TMX_PROPERTY_LAYER: 2;

  /**
   *
   */
  readonly TMX_PROPERTY_OBJECTGROUP: 3;

  /**
   *
   */
  readonly TMX_PROPERTY_OBJECT: 4;

  /**
   *
   */
  readonly TMX_PROPERTY_TILE: 5;

  /**
   *
   */
  readonly SCENE_FADE: 4208917214;

  /**
   *
   */
  readonly SCENE_RADIAL: 49153;

  /**
   *
   */
  readonly INVALID_INDEX: -1;

  /**
   *
   */
  readonly PI: 3.141592653589793;

  /**
   *
   */
  readonly FLT_MAX: 3.402823466e38;

  /**
   *
   */
  readonly RAD: 0.017453292519943295;

  /**
   *
   */
  readonly DEG: 57.29577951308232;

  /**
   *
   */
  readonly UINT_MAX: 4294967295;

  /**
   *
   */
  readonly KEYBOARD_RETURNTYPE_DEFAULT: 0;

  /**
   *
   */
  readonly KEYBOARD_RETURNTYPE_DONE: 1;

  /**
   *
   */
  readonly KEYBOARD_RETURNTYPE_SEND: 2;

  /**
   *
   */
  readonly KEYBOARD_RETURNTYPE_SEARCH: 3;

  /**
   *
   */
  readonly KEYBOARD_RETURNTYPE_GO: 4;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_ANY: 0;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_EMAILADDR: 1;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_NUMERIC: 2;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_PHONENUMBER: 3;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_URL: 4;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_DECIMAL: 5;

  /**
   *
   */
  readonly EDITBOX_INPUT_MODE_SINGLELINE: 6;

  /**
   *
   */
  readonly EDITBOX_INPUT_FLAG_PASSWORD: 0;

  /**
   *
   */
  readonly EDITBOX_INPUT_FLAG_SENSITIVE: 1;

  /**
   *
   */
  readonly EDITBOX_INPUT_FLAG_INITIAL_CAPS_WORD: 2;

  /**
   *
   */
  readonly EDITBOX_INPUT_FLAG_INITIAL_CAPS_SENTENCE: 3;

  /**
   *
   */
  readonly EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS: 4;

  /**
   *
   */
  readonly SCROLLVIEW_DIRECTION_NONE: -1;

  /**
   *
   */
  readonly SCROLLVIEW_DIRECTION_HORIZONTAL: 0;

  /**
   *
   */
  readonly SCROLLVIEW_DIRECTION_VERTICAL: 1;

  /**
   *
   */
  readonly SCROLLVIEW_DIRECTION_BOTH: 2;

  /**
   *
   */
  readonly TABLEVIEW_FILL_TOPDOWN: 0;

  /**
   *
   */
  readonly TABLEVIEW_FILL_BOTTOMUP: 1;

  /**
   *
   */
  readonly CONTROL_EVENT_TOTAL_NUMBER: 9;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_DOWN: 1;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_DRAG_INSIDE: 2;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_DRAG_OUTSIDE: 4;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_DRAG_ENTER: 8;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_DRAG_EXIT: 16;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_UP_INSIDE: 32;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_UP_OUTSIDE: 64;

  /**
   *
   */
  readonly CONTROL_EVENT_TOUCH_CANCEL: 128;

  /**
   *
   */
  readonly CONTROL_EVENT_VALUECHANGED: 256;

  /**
   *
   */
  readonly CONTROL_STATE_NORMAL: 1;

  /**
   *
   */
  readonly CONTROL_STATE_HIGHLIGHTED: 2;

  /**
   *
   */
  readonly CONTROL_STATE_DISABLED: 4;

  /**
   *
   */
  readonly CONTROL_STATE_SELECTED: 8;

  /**
   *
   */
  readonly CONTROL_STATE_INITIAL: 8;

  /**
   *
   */
  readonly CONTROL_ZOOM_ACTION_TAG: 3435855873;

  /**
   *
   */
  readonly CONTROL_STEPPER_PARTMINUS: 0;

  /**
   *
   */
  readonly CONTROL_STEPPER_PARTPLUS: 1;

  /**
   *
   */
  readonly CONTROL_STEPPER_PARTNONE: 2;

  /**
   *
   */
  readonly CONTROL_STEPPER_LABELCOLOR_ENABLED: {
    /**
     *
     */
    readonly r: 55;

    /**
     *
     */
    readonly g: 55;

    /**
     *
     */
    readonly b: 55;

    /**
     *
     */
    readonly a: 255;
  };

  /**
   *
   */
  readonly CONTROL_STEPPER_LABELCOLOR_DISABLED: {
    /**
     *
     */
    readonly r: 147;

    /**
     *
     */
    readonly g: 147;

    /**
     *
     */
    readonly b: 147;

    /**
     *
     */
    readonly a: 255;
  };

  /**
   *
   */
  readonly CONTROL_STEPPER_LABELFONT: 'CourierNewPSMT';

  /**
   *
   */
  readonly AUTOREPEAT_DELTATIME: 0.15;

  /**
   *
   */
  readonly AUTOREPEAT_INCREASETIME_INCREMENT: 12;

  /**
   *
   */
  readonly SHADER_POSITION_TEXTURECOLOR: 'ShaderPositionTextureColor';

  /**
   *
   */
  readonly SHADER_POSITION_TEXTURECOLORALPHATEST: 'ShaderPositionTextureColorAlphaTest';

  /**
   *
   */
  readonly SHADER_POSITION_COLOR: 'ShaderPositionColor';

  /**
   *
   */
  readonly SHADER_POSITION_TEXTURE: 'ShaderPositionTexture';

  /**
   *
   */
  readonly SHADER_POSITION_TEXTURE_UCOLOR: 'ShaderPositionTexture_uColor';

  /**
   *
   */
  readonly SHADER_POSITION_TEXTUREA8COLOR: 'ShaderPositionTextureA8Color';

  /**
   *
   */
  readonly SHADER_POSITION_UCOLOR: 'ShaderPosition_uColor';

  /**
   *
   */
  readonly SHADER_POSITION_LENGTHTEXTURECOLOR: 'ShaderPositionLengthTextureColor';

  /**
   *
   */
  readonly KEY: {
    /**
     *
     */
    readonly '0': 48;

    /**
     *
     */
    readonly '1': 49;

    /**
     *
     */
    readonly '2': 50;

    /**
     *
     */
    readonly '3': 51;

    /**
     *
     */
    readonly '4': 52;

    /**
     *
     */
    readonly '5': 53;

    /**
     *
     */
    readonly '6': 54;

    /**
     *
     */
    readonly '7': 55;

    /**
     *
     */
    readonly '8': 56;

    /**
     *
     */
    readonly '9': 57;

    /**
     *
     */
    readonly none: 0;

    /**
     *
     */
    readonly back: 6;

    /**
     *
     */
    readonly menu: 18;

    /**
     *
     */
    readonly backspace: 8;

    /**
     *
     */
    readonly tab: 9;

    /**
     *
     */
    readonly enter: 13;

    /**
     *
     */
    readonly shift: 16;

    /**
     *
     */
    readonly ctrl: 17;

    /**
     *
     */
    readonly alt: 18;

    /**
     *
     */
    readonly pause: 19;

    /**
     *
     */
    readonly capslock: 20;

    /**
     *
     */
    readonly escape: 27;

    /**
     *
     */
    readonly space: 32;

    /**
     *
     */
    readonly pageup: 33;

    /**
     *
     */
    readonly pagedown: 34;

    /**
     *
     */
    readonly end: 35;

    /**
     *
     */
    readonly home: 36;

    /**
     *
     */
    readonly left: 37;

    /**
     *
     */
    readonly up: 38;

    /**
     *
     */
    readonly right: 39;

    /**
     *
     */
    readonly down: 40;

    /**
     *
     */
    readonly select: 41;

    /**
     *
     */
    readonly insert: 45;

    /**
     *
     */
    readonly Delete: 46;

    /**
     *
     */
    readonly a: 65;

    /**
     *
     */
    readonly b: 66;

    /**
     *
     */
    readonly c: 67;

    /**
     *
     */
    readonly d: 68;

    /**
     *
     */
    readonly e: 69;

    /**
     *
     */
    readonly f: 70;

    /**
     *
     */
    readonly g: 71;

    /**
     *
     */
    readonly h: 72;

    /**
     *
     */
    readonly i: 73;

    /**
     *
     */
    readonly j: 74;

    /**
     *
     */
    readonly k: 75;

    /**
     *
     */
    readonly l: 76;

    /**
     *
     */
    readonly m: 77;

    /**
     *
     */
    readonly n: 78;

    /**
     *
     */
    readonly o: 79;

    /**
     *
     */
    readonly p: 80;

    /**
     *
     */
    readonly q: 81;

    /**
     *
     */
    readonly r: 82;

    /**
     *
     */
    readonly s: 83;

    /**
     *
     */
    readonly t: 84;

    /**
     *
     */
    readonly u: 85;

    /**
     *
     */
    readonly v: 86;

    /**
     *
     */
    readonly w: 87;

    /**
     *
     */
    readonly x: 88;

    /**
     *
     */
    readonly y: 89;

    /**
     *
     */
    readonly z: 90;

    /**
     *
     */
    readonly num0: 96;

    /**
     *
     */
    readonly num1: 97;

    /**
     *
     */
    readonly num2: 98;

    /**
     *
     */
    readonly num3: 99;

    /**
     *
     */
    readonly num4: 100;

    /**
     *
     */
    readonly num5: 101;

    /**
     *
     */
    readonly num6: 102;

    /**
     *
     */
    readonly num7: 103;

    /**
     *
     */
    readonly num8: 104;

    /**
     *
     */
    readonly num9: 105;

    /**
     *
     */
    readonly '*': 106;

    /**
     *
     */
    readonly '+': 107;

    /**
     *
     */
    readonly '-': 109;

    /**
     *
     */
    readonly numdel: 110;

    /**
     *
     */
    readonly '/': 111;

    /**
     *
     */
    readonly f1: 112;

    /**
     *
     */
    readonly f2: 113;

    /**
     *
     */
    readonly f3: 114;

    /**
     *
     */
    readonly f4: 115;

    /**
     *
     */
    readonly f5: 116;

    /**
     *
     */
    readonly f6: 117;

    /**
     *
     */
    readonly f7: 118;

    /**
     *
     */
    readonly f8: 119;

    /**
     *
     */
    readonly f9: 120;

    /**
     *
     */
    readonly f10: 121;

    /**
     *
     */
    readonly f11: 122;

    /**
     *
     */
    readonly f12: 123;

    /**
     *
     */
    readonly numlock: 144;

    /**
     *
     */
    readonly scrolllock: 145;

    /**
     *
     */
    readonly ';': 186;

    /**
     *
     */
    readonly semicolon: 186;

    /**
     *
     */
    readonly equal: 187;

    /**
     *
     */
    readonly '=': 187;

    /**
     *
     */
    readonly ',': 188;

    /**
     *
     */
    readonly comma: 188;

    /**
     *
     */
    readonly dash: 189;

    /**
     *
     */
    readonly '.': 190;

    /**
     *
     */
    readonly period: 190;

    /**
     *
     */
    readonly forwardslash: 191;

    /**
     *
     */
    readonly grave: 192;

    /**
     *
     */
    readonly '[': 219;

    /**
     *
     */
    readonly openbracket: 219;

    /**
     *
     */
    readonly backslash: 220;

    /**
     *
     */
    readonly ']': 221;

    /**
     *
     */
    readonly closebracket: 221;

    /**
     *
     */
    readonly quote: 222;

    /**
     *
     */
    readonly dpadLeft: 1000;

    /**
     *
     */
    readonly dpadRight: 1001;

    /**
     *
     */
    readonly dpadUp: 1003;

    /**
     *
     */
    readonly dpadDown: 1004;

    /**
     *
     */
    readonly dpadCenter: 1005;
  };

  readonly CameraFlag: {
    readonly DEFAULT: 1;
    readonly USER1: 2;
    readonly USER2: 4;
    readonly USER3: 8;
    readonly USER4: 16;
    readonly USER5: 32;
    readonly USER6: 64;
    readonly USER7: 128;
    readonly USER8: 256;
  };

  readonly LightType: {
    readonly DIRECTIONAL: 0;
    readonly POINT: 1;
    readonly SPOT: 2;
    readonly AMBIENT: 3;
  };

  readonly LightFlag: {
    readonly LIGHT0: 1;
    readonly LIGHT1: 2;
    readonly LIGHT2: 4;
    readonly LIGHT3: 8;
    readonly LIGHT4: 16;
    readonly LIGHT5: 32;
    readonly LIGHT6: 64;
    readonly LIGHT7: 128;
    readonly LIGHT8: 256;
    readonly LIGHT9: 512;
    readonly LIGHT10: 1024;
    readonly LIGHT11: 2048;
    readonly LIGHT12: 4096;
    readonly LIGHT13: 8192;
    readonly LIGHT14: 16384;
    readonly LIGHT15: 32768;
  };

  /**
   *
   */
  readonly attributeNames: [
    'a_position',
    'a_color',
    'a_texCoord',
    'a_texCoord1',
    'a_texCoord2',
    'a_texCoord3',
    'a_normal',
    'a_blendWeight',
    'a_blendIndex'
  ];
}
