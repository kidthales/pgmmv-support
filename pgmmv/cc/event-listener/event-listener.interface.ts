/**
 * Cocos event listener interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';

/**
 * The base class of event listener.
 * If you need custom listener which with different callback, you need to inherit this class.
 * For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,
 * EventListenerTouchOneByOne, EventListenerCustom.
 */
export interface CCEventListener extends CCClass {
  /**
   * Checks whether the listener is available.
   */
  checkAvailable(): boolean;

  /**
   * Clones the listener, its subclasses have to override this method.
   */
  clone(): CCEventListener;

  /**
   * Initializes event with type and callback function.
   *
   * @param type
   * @param listenerID
   * @param callback
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  ctor(type: number, listenerID: string, callback: Function): void;

  /**
   * Checks whether the listener is enabled.
   */
  isEnabled(): boolean;

  /**
   * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB.
   * This is a hack, and should be removed once JSB fixes the retain/release bug.
   *
   * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
   * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
   * when you want to use it later, a "Invalid Native Object" error will be raised.
   * The retain function can increase a reference count for the native object to avoid it being released,
   * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
   * retain and release function call should be paired in developer's game code.
   */
  release(): void;

  /**
   * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB.
   * This is a hack, and should be removed once JSB fixes the retain/release bug.
   *
   * You will need to retain an object if you created a listener and haven't added it any target node during the same frame.
   * Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,
   * when you want to use it later, a "Invalid Native Object" error will be raised.
   * The retain function can increase a reference count for the native object to avoid it being released,
   * you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.
   * retain and release function call should be paired in developer's game code.
   */
  retain(): void;

  /**
   * Enables or disables the listener.
   *
   * @param enabled
   */
  setEnabled(enabled: boolean): void;
}
