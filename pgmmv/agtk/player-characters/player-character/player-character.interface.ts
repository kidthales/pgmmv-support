/**
 * Agtk player character interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk player character interface.
 */
export interface AgtkPlayerCharacter {
  /**
   * Get count.
   *
   * @returns Number of objects set in the player character slot.
   */
  getCount(): number;

  /**
   * Get Object ID.
   *
   * @param index Player character index.
   */
  get(index: number): number;
}
