/**
 * Cocos JSB interface module.
 *
 * @packageDocumentation
 */
import type { JSBFileUtils } from './file-utils';

/**
 * The namespace for jsb exclusive APIs, all APIs in this namespace should never be used in Web engine.
 * So please check whether the running environment is native or not before any usage.
 */
export interface jsb {
  /**
   * ATTENTION: USE `jsb.fileUtils` INSTEAD OF `jsb.FileUtils`. `jsb.fileUtils` is the native file utils' singleton object,
   * please refer to Cocos2d-x's API to know how to use it.
   *
   * Only available in JSB.
   */
  fileUtils: JSBFileUtils;
}
