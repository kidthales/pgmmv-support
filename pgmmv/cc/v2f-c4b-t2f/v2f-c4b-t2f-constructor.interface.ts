/**
 * Cocos v2f c4b t2f constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCColor } from '../color';
import type { CCTex2F } from '../tex-2f';
import type { CCVertex2F } from '../vertex-2f';

import type { CCV2F_C4B_T2F } from './v2f-c4b-t2f.interface';

/**
 * Cocos v2f c4b t2f constructor interface.
 *
 * @param vertices
 * @param colors
 * @param texCoords
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCV2F_C4B_T2FConstructor<
  T extends CCV2F_C4B_T2F = CCV2F_C4B_T2F,
  U extends any[] = [CCVertex2F?, CCColor?, CCTex2F?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 20;
}
