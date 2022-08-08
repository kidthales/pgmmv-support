/**
 * Cocos OBB interface module.
 *
 * @packageDocumentation
 */
import type { CCVec3 } from './vec-3.interface';

/**
 * Cocos OBB interface.
 */
export interface CCOBB {
  center: CCVec3;
  xAxis: CCVec3;
  yAxis: CCVec3;
  zAxis: CCVec3;
  extents: CCVec3;
  extentX: CCVec3;
  extentY: CCVec3;
  extentZ: CCVec3;
}
