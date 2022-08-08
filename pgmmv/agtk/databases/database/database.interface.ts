/**
 * Agtk database interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk database interface.
 *
 * @todo
 */
export interface AgtkDatabase {
  /**
   * Get an array of Column Name
   *
   * null if not found
   */
  getColumnList(): string[] | null;

  /**
   * Get an array of Column Value from Column Number
   *
   * null if not found
   *
   * @param arg Column number.
   * @todo
   */
  getColumnByIndex(arg: number): unknown[] | null;

  /**
   * Get an array of Column Value from the Column Name
   *
   * null if not found
   *
   * @param arg Column name
   * @todo
   */
  getColumnByName(arg: string): unknown[] | null;

  /**
   * Get an array of Row Name
   *
   * null if not found
   */
  getRowList(): string[] | null;

  /**
   * Get an array of Row Value from Row Number
   *
   * null if not found
   *
   * @param arg Row number
   * @todo
   */
  getRowByIndex(arg: number): unknown[] | null;

  /**
   * Get an array of Row Value from the Row Name
   *
   * null if not found
   *
   * @param arg Row name.
   * @todo
   */
  getRowByName(arg: string): unknown[] | null;

  /**
   * Get Field Value from Number
   *
   * null if not found
   *
   * @param arg1 Column number
   * @param arg2 Row number
   */
  getFieldByIndex(arg1: number, arg2: number): string;
}
