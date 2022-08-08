/**
 * Agtk object instance layer move action command configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance layer move action command configuration interface.
 */
export interface AgtkLayerMove {
  /**
   * Value -1 or 0+. Note: If non-existing layer, game will not crash but action
   * will be null.
   *  - -1 = Not Set
   *  - 0+ = Any created layers you may have, first layer = 0
   */
  layerIndex: number;
}
