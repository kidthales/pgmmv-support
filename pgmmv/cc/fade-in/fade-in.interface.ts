/**
 * Cocos fade in interface module.
 *
 * @packageDocumentation
 */
import type { CCFadeOut } from '../fade-out';
import type { CCFadeTo } from '../fade-to';
import type { CCNode } from '../node';

/**
 * Fades In an object that implements the cc.RGBAProtocol protocol.
 * It modifies the opacity from 0 to 255.
 * The "reverse" of this action is FadeOut.
 */
export interface CCFadeIn extends CCFadeTo {
  /**
   * Returns a new clone of the action.
   */
  clone(): CCFadeIn;

  /**
   * Returns a reversed action.
   */
  reverse(): CCFadeOut;

  /**
   * Start the action with target.
   *
   * @param target
   */
  startWithTarget(target: CCNode): void;
}
