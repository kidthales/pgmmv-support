/**
 * Agtk tile constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk tile constants interface.
 */
export interface AgtkTile {
  /**
   * Wall top.
   */
  readonly WallTop: 0;

  /**
   * Wall left.
   */
  readonly WallLeft: 1;

  /**
   * Wall right.
   */
  readonly WallRight: 2;

  /**
   * Wall bottom.
   */
  readonly WallBottom: 3;

  /**
   * Wall top bit.
   */
  readonly WallTopBit: 1;

  /**
   * Wall left bit.
   */
  readonly WallLeftBit: 2;

  /**
   * Wall right bit.
   */
  readonly WallRightBit: 4;

  /**
   * Wall bottom bit.
   */
  readonly WallBottomBit: 8;

  /**
   * Wall bit mask.
   */
  readonly WallBitMask: 15;
}
