/**
 * Cocos scroll view interface module.
 *
 * @packageDocumentation
 */
import type { CCEvent } from '../event';
import type { CCLayer } from '../layer';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';
import type { CCSize } from '../size';
import type { CCTouch } from '../touch';

/**
 * ScrollView support for cocos2d -x. It provides scroll view functionalities to
 * cocos2d projects natively.
 */
export interface CCScrollView extends CCLayer {
  /**
   * Indicate whether the scroll view is bounceable.
   */
  bounceable: boolean;

  /**
   * Indicate whether the scroll view clips its children.
   */
  clippingToBounds: boolean;

  /**
   * The inside container of the scroll view.
   */
  container: CCLayer;

  /**
   * The inside container of the scroll view.
   */
  delegate: unknown;

  /**
   * The direction allowed to scroll: cc.SCROLLVIEW_DIRECTION_BOTH by default,
   * or cc.SCROLLVIEW_DIRECTION_NONE | cc.SCROLLVIEW_DIRECTION_HORIZONTAL |
   * cc.SCROLLVIEW_DIRECTION_VERTICAL.
   */
  direction: number;

  /**
   * The current container's maximum offset.
   */
  readonly maxOffset: CCPoint;

  /**
   * The current container's minimum offset.
   */
  readonly minOffset: CCPoint;

  /**
   * The size of the scroll view.
   */
  viewSize: CCSize;

  /**
   * Direction allowed to scroll. CCScrollViewDirectionBoth by default.
   */
  getDirection(): number;

  /**
   * Size to clip. CCNode boundingBox uses contentSize directly.
   * It's semantically different what it actually means to common scroll views.
   * Hence, this scroll view will use a separate size property.
   */
  getViewSize(): CCSize;

  /**
   * Initialized whether success or fail.
   *
   * @param size View size.
   * @param container Parent object.
   */
  initWithViewSize(size: CCSize, container: CCLayer): boolean;

  /**
   * Determines whether it clips its children or not.
   */
  isClippingToBounds(): boolean;

  /**
   * Determines if a given node's bounding box is in visible bounds.
   *
   * @param node
   * @returns YES if it is in visible bounds.
   */
  isNodeVisible(node: CCNode): boolean;

  /**
   * Returns the current container's maximum offset. You may want this while you
   * animate scrolling by yourself.
   *
   * @returns Returns the current container's maximum offset.
   */
  maxContainerOffset(): CCPoint;

  /**
   * Returns the current container's minimum offset. You may want this while you
   * animate scrolling by yourself.
   *
   * @returns Returns the current container's minimum offset.
   */
  minContainerOffset(): CCPoint;

  /**
   * Override functions.
   *
   * @param touch
   * @param event
   */
  onTouchBegan(touch: CCTouch, event: CCEvent): boolean;

  /**
   * Provided to make scroll view compatible with SWLayer's pause method.
   *
   * @param sender
   */
  pause(sender?: unknown): void;

  /**
   * Provided to make scroll view compatible with SWLayer's resume method.
   *
   * @param sender
   */
  resume(sender?: unknown): void;

  /**
   * Sets a new content offset. It ignores max/min offset. It just sets what's
   * given. (just like UIKit's UIScrollView)
   *
   * @param offset New offset.
   * @param animated If true, the view will scroll to the new offset.
   */
  setContentOffset(offset: CCPoint, animated?: number): void;

  /**
   * Sets a new content offset. It ignores max/min offset. It just sets what's
   * given. (just like UIKit's UIScrollView)
   *
   * You can override the animation duration with this method.
   *
   * @param offset New Offset.
   * @param dt Animation duration.
   */
  setContentOffsetInDuration(offset: CCPoint, dt: number): void;

  /**
   * Sets a new scale and does that for a predefined duration.
   *
   * @param scale A new scale value.
   * @param animated If YES, scaling is animated.
   */
  setZoomScale(scale: number, animated?: boolean): void;

  /**
   * Sets a new scale for container in a given duration.
   *
   * @param s A new scale value.
   * @param dt Animation duration.
   */
  setZoomScaleInDuration(s: number, dt: number): void;
}
