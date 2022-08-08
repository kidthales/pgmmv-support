/**
 * Agtk objects interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObject } from './object';

/**
 * Agtk objects interface.
 */
export interface AgtkObjects {
  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkObject;
}
