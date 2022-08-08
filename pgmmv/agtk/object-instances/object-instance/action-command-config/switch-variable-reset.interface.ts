/**
 * Agtk object instance switch/variable reset action command configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance switch/variable reset action command configuration interface.
 */
export interface AgtkSwitchVariableReset {
  /**
   * Value true/false.
   *  - True = Switch
   *  - False = Variable
   */
  swtch: boolean;

  /**
   * Value -2, 0+.
   *  - -2 = Object Self
   *  - 0 = Common Switch/Variable
   *  - 1+ = Any Object ID's you may have created
   */
  objectId: number;

  /**
   * This takes an whole number 1+ and represents the Switch or Variable ID.
   * Value will depend on if Self or Common selected as well as if created or
   * default.
   */
  itemId: number;
}
