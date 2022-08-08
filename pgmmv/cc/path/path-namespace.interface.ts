/**
 * Cocos path namespace interface module.
 *
 * @packageDocumentation
 */

/**
 * Cocos path namespace interface.
 */
export interface CCPathNamespace {
  /**
   * Join strings to be a path.
   *
   * @param args
   */
  join(...args: string[]): string;

  /**
   * Get the ext name of a path.
   *
   * @param pathStr
   */
  extname(pathStr: string): string | null;

  /**
   * Get the main name of a file name.
   *
   * @param fileName
   */
  mainFileName(fileName: string): string;

  /**
   * Get the file name of a file path.
   *
   * @param pathStr
   * @param extname
   */
  basename(pathStr: string, extname: string): string;

  /**
   * Get dirname of a file path.
   *
   * @param pathStr
   */
  dirname(pathStr: string): string;

  /**
   * Change extname of a file path.
   *
   * @param pathStr
   * @param extname
   */
  changeExtname(pathStr: string, extname: string): string;

  /**
   * Change file name of a file path.
   *
   * @param pathStr
   * @param basename
   * @param isSameExt
   */
  changeBasename(pathStr: string, basename: string, isSameExt?: boolean): string;
}
