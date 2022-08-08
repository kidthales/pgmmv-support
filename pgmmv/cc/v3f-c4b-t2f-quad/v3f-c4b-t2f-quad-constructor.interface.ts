/**
 * Cocos v3f c4b t2f quad constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCV3F_C4B_T2F } from '../v3f-c4b-t2f';

import type { CCV3F_C4B_T2F_Quad } from './v3f-c4b-t2f-quad.interface';

/**
 * Cocos v3f c4b t2f quad constructor interface.
 *
 * @param tl
 * @param tr
 * @param bl
 * @param br
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCV3F_C4B_T2F_QuadConstructor<
  T extends CCV3F_C4B_T2F_Quad = CCV3F_C4B_T2F_Quad,
  U extends any[] = [CCV3F_C4B_T2F?, CCV3F_C4B_T2F?, CCV3F_C4B_T2F?, CCV3F_C4B_T2F?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 96;
}
