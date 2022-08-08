/**
 * Agtk objects constants interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSwitches } from './switches';
import type { AgtkVariables } from './variables';

/**
 * Agtk objects constants interface.
 */
export interface AgtkObjects {
  /**
   * Switches.
   */
  readonly switches: AgtkSwitches;

  /**
   * Variables.
   */
  readonly variables: AgtkVariables;
}
