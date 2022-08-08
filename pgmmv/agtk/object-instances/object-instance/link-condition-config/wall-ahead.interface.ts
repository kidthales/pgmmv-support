/**
 * Agtk object instance wall ahead link condition configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance wall ahead link condition configuration interface.
 */
export interface AgtkWallAhead {
  /**
   * Value 0 - 15.
   *  - 0 = No wall sides selected
   *  - 1 = Top
   *  - 2 = Left
   *  - 3 = Left, Top
   *  - 4 = Right
   *  - 5 = Top, Right
   *  - 6 = Left, Right
   *  - 7 = Left, Top, Right
   *  - 8 = Bottom
   *  - 9 = Top, Bottom
   *  - 10 = Left, Bottom
   *  - 11 = Left, Top, Bottom
   *  - 12 = Right, Bottom
   *  - 13 = Top, Right, Bottom
   *  - 14 = Left, Bottom, Right
   *  - 15 = All wall sides selected
   */
  wallBit: number;

  /**
   * Value true/false.
   *  - True = Set by Target Tile Group
   *  - False = Check all Tile Group's
   */
  useTileGroup: boolean;

  /**
   * Value 0+.
   *  - 0 = Default Tile Group
   *  - 1+ = Any other Tile Group's you have made in order of list
   */
  tileGroup: number;
}
