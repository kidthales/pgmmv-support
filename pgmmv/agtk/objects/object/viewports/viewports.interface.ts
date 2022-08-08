/**
 * Agtk object viewports interface module.
 *
 * @packageDocumentation
 */
import type { AgtkViewport } from './viewport';

/**
 * Field of vision, lighting data set in "Field of Vision, Lighting".
 */
export interface AgtkViewports {
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
  get(arg: number): AgtkViewport;
}
