/**
 * Agtk animation motion directions interface module.
 *
 * @packageDocumentation
 */
import type { AgtkDirection } from './direction';

/**
 * Display direction data
 */
export interface AgtkDirections {
  /**
   *
   */
  getIdList(): number[];

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkDirection;
}
