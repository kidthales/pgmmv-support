/**
 * Cocos quad 3 constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVertex3F } from '../vertex-3f';

import type { CCQuad3 } from './quad-3.interface';

/**
 * Cocos quad 3 constructor interface.
 *
 * @param tl
 * @param tr
 * @param bl
 * @param br
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCQuad3Constructor<
  T extends CCQuad3 = CCQuad3,
  U extends any[] = [CCVertex3F?, CCVertex3F?, CCVertex3F?, CCVertex3F?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 48;
}
