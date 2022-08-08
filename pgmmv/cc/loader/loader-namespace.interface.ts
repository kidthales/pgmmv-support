/**
 * Cocos loader namespace interface module.
 *
 * @packageDocumentation
 */
import type { CCAsyncPool } from '../async-pool';

/**
 * Cocos loader namespace interface.
 */
export interface CCLoaderNamespace {
  cache: object;
  getXMLHttpRequest(): XMLHttpRequest;
  loadJs(baseDir: string, jsList: string[], cb: Function): void;
  loadJsWithImg(baseDir: string, jsList: string[], cb: Function): void;
  loadTxt(url: string, cb: Function): void;
  loadJson(url: string, cb: Function): void;
  loadImg(url: string, option: object | Function, cb?: Function): void;
  loadBinary(url: string, cb: Function): void;
  loadBinarySync(url: string): unknown;
  getUrl(basePath: string, url: string): string;
  load(resources: unknown[], option?: object | Function, loadCallback?: Function): CCAsyncPool;
  loadAliases(url: string, cb: Function): void;
  register(extNames: string | string[], loader: unknown): void;
  getRes(url: string): unknown;
  release(url: string): void;
  releaseAll(): void;
}
