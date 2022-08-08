/**
 * Cocos vector 4 constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCVec4 } from './vec-4.interface';

/**
 * Cocos vector 4 constructor interface.
 *
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
export interface CCVec4Constructor<T extends CCVec4 = CCVec4, U extends any[] = [number?, number?, number?, number?]>
  extends Constructor<T, U> {}
