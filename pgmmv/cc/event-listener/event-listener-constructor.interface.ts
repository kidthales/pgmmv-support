/**
 * Cocos event listener constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCEventListener } from './event-listener.interface';

/**
 * Cocos event listener constructor interface.
 *
 * @param type
 * @param listenerID
 * @param callback
 * @constructor
 */
export interface CCEventListenerConstructor<
  T extends CCEventListener = CCEventListener,
  U extends any[] = [number, string, Function]
> extends CCClassConstructor<T, U> {
  /**
   * The type code of unknown event listener.
   */
  readonly UNKNOWN: 0;

  /**
   * The type code of one by one touch event listener.
   */
  readonly TOUCH_ONE_BY_ONE: 1;

  /**
   * The type code of all at once touch event listener.
   */
  readonly TOUCH_ALL_AT_ONCE: 2;

  /**
   * The type code of keyboard event listener.
   */
  readonly KEYBOARD: 3;

  /**
   * The type code of mouse event listener.
   */
  readonly MOUSE: 4;

  /**
   * The type code of acceleration event listener.
   */
  readonly ACCELERATION: 6;

  /**
   * The type code of Focus change event listener.
   */
  readonly FOCUS: 7;

  /**
   * The type code of custom event listener.
   */
  readonly CUSTOM: 8;

  /**
   * Create a EventListener object by json object.
   *
   * ```
   * cc.EventListener.create({
   *   event: cc.EventListener.TOUCH_ONE_BY_ONE,
   *   swallowTouches: true,
   *   onTouchBegan: function (touch, event) {
   *     // do something
   *     return true;
   *   }
   * });
   * ```
   * @param argObj
   */
  create(argObj: Record<string, unknown>): CCEventListener;
}
