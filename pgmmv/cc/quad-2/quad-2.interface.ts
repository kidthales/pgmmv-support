/**
 * Cocos quad 2 interface module.
 *
 * @packageDocumentation
 */
import type { CCVertex2F } from '../vertex-2f';

/**
 * Cocos quad 2 interface.
 */
export interface CCQuad2 {
  tl: CCVertex2F;
  tr: CCVertex2F;
  bl: CCVertex2F;
  br: CCVertex2F;
}
