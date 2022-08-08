/**
 * Agtk layer interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSlope } from './slope';
import type { AgtkTileInfo } from './tile-info.interface';

/**
 * Agtk layer interface.
 */
export interface AgtkLayer {
  /**
   * Retrieves tile information set in scene.
   *
   * @param arg1 x
   * @param arg2 y
   */
  getTileInfo(arg1: number, arg2: number): AgtkTileInfo;

  /**
   * Configures subtile information set in scene.
   *
   * @param arg1 sx
   * @param arg2 sy
   * @param arg3 subtileX
   * @param arg4 subtileY
   */
  setSubtileInfo(arg1: number, arg2: number, arg3: number, arg4: number): void;

  /**
   *
   */
  getSlopeIdList(): number[];

  /**
   *
   * @param arg
   */
  getSlopeById(arg: number): AgtkSlope;
}
