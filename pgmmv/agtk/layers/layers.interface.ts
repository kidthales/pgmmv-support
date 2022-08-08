/**
 * Agtk layers interface module.
 *
 * @packageDocumentation
 */
import type { AgtkLayer } from './layer';

/**
 * Agtk layers interface.
 */
export interface AgtkLayers {
  /**
   *
   */
  getCount(): number;

  /**
   *
   * @param arg
   */
  getIdByIndex(arg: number): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  getById(arg: number): AgtkLayer;
}
