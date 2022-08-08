/**
 * Agtk animations interface module.
 *
 * @packageDocumentation
 */
import type { AgtkAnimation } from './animation';

/**
 * Animation data.
 */
export interface AgtkAnimations {
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
  get(arg: number): AgtkAnimation;
}
