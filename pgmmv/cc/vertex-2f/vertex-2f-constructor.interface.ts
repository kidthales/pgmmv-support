/**
 * Cocos vertex 2F constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVertex2F } from './vertex-2f.interface';

/**
 * Cocos vertex 2F constructor interface.
 *
 * @param x
 * @param y
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCVertex2FConstructor<
  T extends CCVertex2F = CCVertex2F,
  U extends any[] = [number?, number?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 8;
}
