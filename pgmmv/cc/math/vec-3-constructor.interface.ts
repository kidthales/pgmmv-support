/**
 * Cocos vector 3 constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVec3 } from './vec-3.interface';

/**
 * Cocos vector 3 constructor interface.
 *
 * @param x
 * @param y
 * @param z
 * @constructor
 */
export interface CCVec3Constructor<T extends CCVec3 = CCVec3, U extends any[] = [number?, number?, number?]>
  extends Constructor<T, U> {}
