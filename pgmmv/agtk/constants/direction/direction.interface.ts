/**
 * Agtk direction constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk direction constants interface.
 */
export interface AgtkDirection {
  /**
   * Bottom left bit.
   */
  readonly BottomLeftBit: 2;

  /**
   * Bottom bit.
   */
  readonly BottomBit: 4;

  /**
   * Bottom right bit.
   */
  readonly BottomRightBit: 8;

  /**
   * Left bit.
   */
  readonly LeftBit: 16;

  /**
   * Right bit.
   */
  readonly RightBit: 64;

  /**
   * Top left bit.
   */
  readonly TopLeftBit: 128;

  /**
   * Top bit.
   */
  readonly TopBit: 256;

  /**
   * Top right bit.
   */
  readonly TopRightBit: 512;

  /**
   * All direction bit.
   */
  readonly AllDirectionBit: 990;
}
