/**
 * Agtk player characters interface module.
 *
 * @packageDocumentation
 */
import type { AgtkPlayerCharacter } from './player-character';

/**
 * Agtk player characters interface.
 */
export interface AgtkPlayerCharacters {
  /**
   * Get count.
   *
   * @returns Number of slots for managing player characters.
   * @note Currently fixed at 4.
   */
  getCount(): number;

  /**
   * Get player character.
   *
   * @param index Player character index.
   * @returns playerCharacter of the specified slot.
   */
  get(arg: number): AgtkPlayerCharacter;
}
