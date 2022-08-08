/**
 * Cocos async namespace interface module.
 *
 * @packageDocumentation
 */
import type { CCAsyncPool } from '../async-pool';

/**
 * Cocos async namespace interface.
 */
export interface CCAsyncNamespace {
  /**
   * Do tasks series.
   *
   * @param tasks
   * @param cb
   * @param target
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  series(tasks: object | Array<unknown>, cb: Function, target?: object): CCAsyncPool;

  /**
   * Do tasks parallel.
   *
   * @param tasks
   * @param cb
   * @param target
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  parallel(tasks: object | Array<unknown>, cb: Function, target?: object): CCAsyncPool;

  /**
   * Do tasks waterfall.
   * @param tasks
   * @param cb
   * @param target
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  waterfall(tasks: object | Array<unknown>, cb: Function, target?: object): CCAsyncPool;

  /**
   * Do tasks by iterator.
   * @param tasks
   * @param iterator
   * @param callback
   * @param target
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  map(tasks: object | Array<unknown>, iterator: Function | object, callback?: Function, target?: object): CCAsyncPool;

  /**
   * Do tasks by iterator limit.
   *
   * @param tasks
   * @param limit
   * @param iterator
   * @param cb
   * @param target
   */
  mapLimit(
    tasks: object | Array<unknown>,
    limit: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    iterator: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    cb: Function,
    target?: object
  ): CCAsyncPool;
}
