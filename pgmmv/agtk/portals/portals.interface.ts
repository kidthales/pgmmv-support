/**
 * Agtk portals interface module.
 *
 * @packageDocumentation
 */
import type { AgtkPortal } from './portal';

/**
 * Agtk portals interface.
 */
export interface AgtkPortals {
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
  get(arg: number): AgtkPortal;
}
