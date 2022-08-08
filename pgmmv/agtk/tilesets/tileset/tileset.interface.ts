/**
 * Agtk tileset interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk tileset interface.
 */
export interface AgtkTileset {
  /**
   * Tileset ID.
   */
  id: number;

  /**
   * Tileset name.
   */
  name: string;

  /**
   * Tileset image ID.
   */
  imageId: number;

  /**
   *
   */
  getPluginId(arg: unknown): number;

  /**
   *
   */
  getPluginParam(arg: unknown): unknown;

  /**
   * Clears an animation.
   *
   * @param arg1 x
   * @param arg2 y
   * @param arg3 width
   * @param arg4 height
   */
  clearAnimation(arg1: number, arg2: number, arg3: number, arg4: number): void;

  /**
   * Adds an animation.
   *
   * @param arg1 x
   * @param arg2 y
   * @param arg3 width
   * @param arg4 height
   * @param arg5 ax
   * @param arg6 ay
   * @param arg7 duration300
   */
  appendAnimation(
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number
  ): void;

  /**
   * Acquires wall detection data for all valid tile directions.
   *
   * Check the constants listed below to determine if wall detection is configured.
   *
   * - Agtk.constants.tile.WallTopBit
   * - Agtk.constants.tile.WallLeftBit
   * - Agtk.constants.tile.WallRightBit
   * - Agtk.constants.tile.WallBottomBit
   *
   * @param arg1 x
   * @param arg2 y
   */
  getWallBits(arg1: number, arg2: number): number;
}
