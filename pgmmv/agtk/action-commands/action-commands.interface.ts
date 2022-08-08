/**
 * Agtk action commands interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands interface.
 */
export interface AgtkActionCommands {
  /**
   *
   * @param arg1 Object ID
   * @param arg2 X position
   * @param arg3 Y position
   * @param arg4 Layer number starting from the front 0, 1, ...
   * @returns Object instance ID.
   */
  objectCreate(arg1: number, arg2: number, arg3: number, arg4: number): number;

  /**
   *
   * @param arg1 Instance ID
   */
  objectDestroy(arg1: number): void;
}
