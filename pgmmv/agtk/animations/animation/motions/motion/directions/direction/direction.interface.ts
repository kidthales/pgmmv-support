/**
 * Agtk animation motion direction interface module.
 *
 * @packageDocumentation
 */
import type { AgtkTracks } from './tracks';

/**
 * Agtk animation motion direction interface.
 */
export interface AgtkDirection {
  /**
   * Direction ID.
   */
  id: number;

  /**
   * Direction name.
   */
  name: string;

  /**
   * Track data.
   */
  tracks: AgtkTracks;
}
