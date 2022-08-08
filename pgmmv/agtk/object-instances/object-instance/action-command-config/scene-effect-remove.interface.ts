/**
 * Agtk object instance scene effect remove action command configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance scene effect remove action command configuration
 * interface.
 */
export interface AgtkSceneEffectRemove {
  /**
   * Value -4, -3, -1, 0+
   *  - -4 = Foremost Layer + Menu
   *  - -3 = Foremost Layer
   *  - -1 = All Layers in Scene
   *  - 0+ = Any individual available layer
   */
  layerIndex: number;

  /**
   * Values are in bit because of the various combos that can be selected.
   * STRONGLY RECOMMENDED to setup in runtime action and copy the value from the
   * Show Log if you need to use it in script. Here are two options for example:
   *  - 0 = None
   *  - 1023= All Filter Effects
   */
  removeBit: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;
}
