/**
 * Cocos touch interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCPoint } from '../point';

/**
 * The touch event class.
 */
export interface CCTouch extends CCClass {
  /**
   * Returns the delta distance from the previous touche to the current one in screen coordinates.
   */
  getDelta(): CCPoint;

  /**
   * Returns the id of cc.Touch.
   */
  getID(): number;

  /**
   * Returns the id of cc.Touch.
   *
   * @deprecated since v3.0, please use getID() instead.
   */
  getId(): number;

  /**
   * Returns the current touch location in OpenGL coordinates.
   */
  getLocation(): CCPoint;

  /**
   * Returns the current touch location in screen coordinates.
   */
  getLocationInView(): CCPoint;

  /**
   * Returns X axis location value.
   */
  getLocationX(): number;

  /**
   * Returns Y axis location value.
   */
  getLocationY(): number;

  /**
   * Returns the previous touch location in OpenGL coordinates.
   */
  getPreviousLocation(): CCPoint;

  /**
   * Returns the previous touch location in screen coordinates.
   */
  getPreviousLocationInView(): CCPoint;

  /**
   * Returns the start touch location in OpenGL coordinates.
   */
  getStartLocation(): CCPoint;

  /**
   * Returns the start touch location in screen coordinates.
   */
  getStartLocationInView(): CCPoint;

  /**
   * Sets information to touch.
   *
   * @param id
   * @param x
   * @param y
   */
  setTouchInfo(id: number, x: number, y: number): void;
}
