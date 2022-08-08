/**
 * Agtk animation motion interface module.
 *
 * @packageDocumentation
 */
import type { AgtkDirections } from './directions';

/**
 * Agtk animation motion interface.
 */
export interface AgtkMotion {
  /**
   * Motion ID.
   */
  id: number;

  /**
   * Motion name.
   */
  name: string;

  /**
   * Display direction data.
   */
  directions: AgtkDirections;
}
