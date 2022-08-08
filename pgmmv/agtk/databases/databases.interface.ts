/**
 * Agtk databases interface module.
 *
 * @packageDocumentation
 */
import type { AgtkDatabase } from './database';

/**
 * Agtk databases interface.
 */
export interface AgtkDatabases {
  /**
   * Get Database from ID
   *
   * null if not found
   *
   * @param arg Database ID
   */
  get(arg: number): AgtkDatabase | null;

  /**
   * Get Database ID from Database Name
   *
   * -1 if not found
   *
   * @param arg Database name
   */
  getIdByName(arg: string): number | -1;

  /**
   * Get an array of Database ID
   *
   * null if not foun
   */
  getIdList(): number | null;
}
