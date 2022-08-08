/**
 * Agtk controllers interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk controllers interface.
 */
export interface AgtkControllers {
  /**
   *
   */
  MaxControllerId: 16;

  /**
   * Controller ID: 0-16
   *
   * * 0 = keyboard/mouse
   *
   * Control key ID: 1~
   *
   * <Control key ID>: Agtk.constants.controllers.OperationKeyA, ..., Agtk.constants.controllers.OperationKeyCancel
   *
   * @param arg1 Controller ID
   * @param arg2 Control key ID
   * @returns Whether pressed.
   */
  getOperationKeyPressed(arg1: number, arg2: number): boolean;

  /**
   * Controller ID: 0~16
   *
   * * 0 is keyboard/mouse Operation key ID: 1~
   *
   * Return value is within range of -1~1
   *
   * <Operation key ID>: Agtk.constants.controllers.OperationKeyA, ..., Agtk.constants.controllers.OperationKeyCancel
   *
   * @param arg1 Controller ID
   * @param arg2 Operation key ID
   */
  getOperationKeyValue(arg1: number, arg2: number): number;

  /**
   * Controller ID: 0-16
   *
   * * 0 = keyboard/mouse
   *
   * Key code: 0~
   *
   * Key codes, return values depend on device.
   *
   * Key code when controller ID = 0: Agtk.constants.controllers.ReservedKeyCodePc_W - Agtk.constants.controllers.ReservedKeyCodePc_MousePointer
   *
   * @param arg1 Controller ID
   * @param arg2 Key code
   */
  getKeyValue(arg1: number, arg2: number): number;

  /**
   * Controller ID: 0-16
   *
   * * 0 = keyboard/mouse
   *
   * @param arg1 Controller ID
   * @returns Whether connected.
   */
  isConnected(arg1: number): boolean;
}
