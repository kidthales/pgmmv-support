/**
 * Agtk object variables interface module.
 *
 * @packageDocumentation
 */
import type { AgtkVariable } from './variable';

/**
 * Object variable information.
 *
 * The object variable's preset ID is defined in `Agtk.constants.variables`.
 *
 * @note The content is identical to the preset ID defined in
 * `Agtk.objectInstance.variables`.
 */
export interface AgtkVariables {
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
  get(arg: number): AgtkVariable;
}
