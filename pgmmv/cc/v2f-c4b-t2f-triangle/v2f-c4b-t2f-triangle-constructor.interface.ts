/**
 * Cocos v2f c4b t2f triangle constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCV2F_C4B_T2F } from '../v2f-c4b-t2f';

import type { CCV2F_C4B_T2F_Triangle } from './v2f-c4b-t2f-triangle.interface';

/**
 * Cocos v2f c4b t2f triangle constructor interface.
 *
 * @param a
 * @param b
 * @param c
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCV2F_C4B_T2F_TriangleConstructor<
  T extends CCV2F_C4B_T2F_Triangle = CCV2F_C4B_T2F_Triangle,
  U extends any[] = [CCV2F_C4B_T2F?, CCV2F_C4B_T2F?, CCV2F_C4B_T2F?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 60;
}
