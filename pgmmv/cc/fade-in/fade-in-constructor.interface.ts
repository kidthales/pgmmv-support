/**
 * Cocos fade in constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCFadeToConstructor } from '../fade-to';

import type { CCFadeIn } from './fade-in.interface';

/**
 * Cocos fade in constructor interface.
 *
 * @param duration Duration in seconds.
 * @constructor
 */
export interface CCFadeInConstructor<T extends CCFadeIn = CCFadeIn, U extends any[] = [number?]>
  extends CCFadeToConstructor<T, U> {
  /**
   * Please use cc.fadeIn instead.
   * Fades In an object that implements the cc.RGBAProtocol protocol.
   * It modifies the opacity from 0 to 255.
   *
   * @param duration Duration in seconds.
   * @deprecated since v3.0 please use cc.fadeIn() instead.
   */
  create(...args: U): T;
}
