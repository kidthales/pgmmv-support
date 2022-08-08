/**
 * Cocos JSB file utilities interface module.
 *
 * @packageDocumentation
 */

/**
 * ATTENTION: USE `jsb.fileUtils` INSTEAD OF `jsb.FileUtils`. `jsb.fileUtils` is the native file utils' singleton object,
 * please refer to Cocos2d-x's API to know how to use it.
 *
 * Only available in JSB.
 */
export interface JSBFileUtils {
  /**
   * Creates a directory.
   * @param dirPath The path of the directory, it must be an absolute path.
   * @returns True if the directory have been created successfully, false if not.
   */
  createDirectory(dirPath: string): boolean;

  /**
   * Retrieve the file size.
   *
   * Note:
   *  - If a relative path was passed in, it will be inserted a default root path at the beginning.
   * @param filepath The path of the file, it could be a relative or absolute path.
   * @returns The file size.
   */
  getFileSize(filepath: string): number;

  /**
   * Gets string from a file.
   * @param path Filepath for the string to be read. Can be relative or absolute path.
   * @returns String from file.
   */
  getStringFromFile(path: string): string;

  /**
   * Checks whether the path is an absolute path.
   *
   * Note:
   *  - On Android, if the parameter passed in is relative to "assets/", this method will treat it as an absolute path.
   *    Also on Blackberry, path starts with "app/native/Resources/" is treated as an absolute path.
   * @param path The path that needs to be checked.
   * @returns True if it's an absolute path, false if not.
   */
  isAbsolutePath(path: string): boolean;

  /**
   * Checks whether the path is a directory.
   * @param dirPath The path of the directory, it could be a relative or an absolute path.
   * @returns True if the directory exists, false if not.
   */
  isDirectoryExist(dirPath: string): boolean;

  /**
   * Checks whether a file exists.
   *
   * Note:
   *  - If a relative path was passed in, it will be inserted a default root path at the beginning.
   * @param filename The path of the file, it could be a relative or absolute path.
   * @returns True if the file exists, false if not.
   */
  isFileExist(filename: string): boolean;

  /**
   * Removes a directory.
   * @param dirPath The full path of the directory, it must be an absolute path.
   * @returns True if the directory have been removed successfully, false if not.
   */
  removeDirectory(dirPath: string): boolean;

  /**
   * Removes a file.
   * @param filepath The full path of the file, it must be an absolute path.
   * @returns True if the file have been removed successfully, false if not.
   */
  removeFile(filepath: string): boolean;

  /**
   * Renames a file under the given directory.
   * @param path The parent directory path of the file, it must be an absolute path.
   * @param oldname The current name of the file.
   * @param name The new name of the file.
   * @returns True if the file have been renamed successfully, false if not.
   */
  renameFile(path: string, oldname: string, name: string): boolean;

  /**
   * Write a string into a file.
   * @param dataStr The string want to save.
   * @param fullPath The full path to the file you want to save a string.
   * @returns True if write success.
   */
  writeStringToFile(dataStr: string, fullPath: string): boolean;
}
