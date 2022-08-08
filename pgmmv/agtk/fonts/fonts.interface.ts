/**
 * Agtk fonts interface module.
 *
 * @packageDocumentation
 */
import type { AgtkFont } from './font';

/**
 * Agtk fonts interface.
 */
export interface AgtkFonts {
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
  get(arg: number): AgtkFont;
}
