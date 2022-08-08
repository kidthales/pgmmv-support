/**
 * Agtk object switches interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSwitch } from './switch';

/**
 * Object switch information.
 *
 * The object switch's preset ID is defined in `Agtk.constants.switches`.
 *
 * @note The content is identical to the preset ID defined in
 * `Agtk.objectInstance.switches`.
 */
export interface AgtkSwitches {
  /**
   *
   */
  getIdList(): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkSwitch;
}
