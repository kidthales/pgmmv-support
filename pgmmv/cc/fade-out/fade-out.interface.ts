/**
 * Cocos fade out interface module.
 *
 * @packageDocumentation
 */
import type { CCFadeIn } from '../fade-in';
import type { CCFadeTo } from '../fade-to';

/**
 * Fades Out an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from 255 to 0.
 * The "reverse" of this action is FadeIn.
 */
export interface CCFadeOut extends CCFadeTo {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeOut;

  /**
   * Returns a reversed action.
   */
  reverse(): CCFadeIn;
}
