/**
 * Cocos fade out constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCFadeToConstructor } from '../fade-to';

import type { CCFadeOut } from './fade-out.interface';

/**
 * Cocos fade out constructor interface.
 *
 * @param duration Duration in seconds.
 * @constructor
 */
export interface CCFadeOutConstructor<T extends CCFadeOut = CCFadeOut, U extends any[] = [number?]>
  extends CCFadeToConstructor<T, U> {
  /**
   * Please use cc.fadeOut instead.
   * Fades Out an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 255 to 0.
   *
   * @param duration Duration in seconds.
   * @deprecated since v3.0 please use cc.fadeOut instead.
   */
  create(...args: U): T;
}
