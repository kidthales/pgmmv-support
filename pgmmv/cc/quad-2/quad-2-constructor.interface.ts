/**
 * Cocos quad 2 constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVertex2F } from '../vertex-2f';

import type { CCQuad2 } from './quad-2.interface';

/**
 * Cocos quad 2 constructor interface.
 *
 * @param tl
 * @param tr
 * @param bl
 * @param br
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCQuad2Constructor<
  T extends CCQuad2 = CCQuad2,
  U extends any[] = [CCVertex2F?, CCVertex2F?, CCVertex2F?, CCVertex2F?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 32;
}
