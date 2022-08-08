/**
 * Agtk object instance object filter effect remove action command configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance object filter effect remove action command configuration
 * interface.
 */
export interface AgtkObjectFilterEffectRemove {
  /**
   * Values are in bit because of the various combos that can be selected.
   * STRONGLY RECOMMENDED to setup in runtime action and copy the value from the
   * Show Log if you need to use it in script. Here are two options for example:
   *  - 0 = None
   *  - 4095 = All Filter Effects
   *
   * (1 << value) is assigned to value (value) specified from Agtk.constants.filterEffects.
   * Use OR operators to specify multiple.
   */
  removeBit: number;

  /**
   * Value 0.00+. NOTE: 300 = 1sec.
   */
  duration300: number;
}
