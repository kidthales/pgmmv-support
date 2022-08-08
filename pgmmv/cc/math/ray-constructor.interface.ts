/**
 * Cocos ray constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCRay } from './ray.interface';
import type { CCVec3 } from './vec-3.interface';

/**
 * Cocos ray constructor interface.
 *
 * @param origin
 * @param direction
 * @constructor
 */
export interface CCRayConstructor<T extends CCRay = CCRay, U extends any[] = [CCVec3?, CCVec3?]>
  extends Constructor<T, U> {}
