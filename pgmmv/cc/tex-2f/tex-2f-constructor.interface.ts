/**
 * Cocos tex 2F constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCTex2F } from './tex-2f.interface';

/**
 * Cocos tex 2F constructor interface.
 *
 * @param u
 * @param v
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCTex2FConstructor<
  T extends CCTex2F = CCTex2F,
  U extends any[] = [number?, number?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 8;
}
