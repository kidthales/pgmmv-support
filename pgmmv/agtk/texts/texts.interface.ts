/**
 * Agtk texts interface module.
 *
 * @packageDocumentation
 */
import type { AgtkText } from './text';

/**
 * Agtk texts interface.
 */
export interface AgtkTexts {
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
  get(arg: number): AgtkText;
}
