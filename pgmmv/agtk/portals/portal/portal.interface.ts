/**
 * Agtk portal interface module.
 *
 * @packageDocumentation
 */
import type { AgtkPortalAB } from './portal-ab';

/**
 * Agtk portal interface.
 */
export interface AgtkPortal {
  /**
   * Portal ID.
   */
  id: number;

  /**
   * Portal name.
   */
  name: string;

  /**
   * Portal A.
   */
  a: AgtkPortalAB;

  /**
   * Portal B.
   */
  b: AgtkPortalAB;
}
