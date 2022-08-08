/**
 * Cocos AABB constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCAABB } from './aabb.interface';
import type { CCVec3 } from './vec-3.interface';

/**
 * Cocos AABB constructor interface.
 *
 * @param min
 * @param max
 * @constructor
 */
export interface CCAABBConstructor<T extends CCAABB = CCAABB, U extends any[] = [CCVec3?, CCVec3?]>
  extends Constructor<T, U> {}
