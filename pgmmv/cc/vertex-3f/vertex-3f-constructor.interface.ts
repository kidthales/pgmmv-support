/**
 * Cocos vertex 3F constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVertex3F } from './vertex-3f.interface';

/**
 * Cocos vertex 3F constructor interface.
 *
 * @param x
 * @param y
 * @param z
 * @param arrayBuffer
 * @param offset
 * @constructor
 */
export interface CCVertex3FConstructor<
  T extends CCVertex3F = CCVertex3F,
  U extends any[] = [number?, number?, number?, ArrayBuffer?, number?]
> extends Constructor<T, U> {
  /**
   * @static
   */
  readonly BYTES_PER_ELEMENT: 12;
}
