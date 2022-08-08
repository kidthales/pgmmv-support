/**
 * Cocos quad 3 interface module.
 *
 * @packageDocumentation
 */
import type { CCVertex3F } from '../vertex-3f';

/**
 * Cocos quad 3 interface.
 */
export interface CCQuad3 {
  tl: CCVertex3F;
  tr: CCVertex3F;
  bl: CCVertex3F;
  br: CCVertex3F;
}
