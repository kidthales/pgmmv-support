/**
 * Cocos AABB interface module.
 *
 * @packageDocumentation
 */
import type { CCVec3 } from './vec-3.interface';

/**
 * Cocos AABB interface.
 */
export interface CCAABB {
  min: CCVec3;
  max: CCVec3;
}
