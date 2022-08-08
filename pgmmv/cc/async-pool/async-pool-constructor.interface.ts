/**
 * Cocos async pool constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCAsyncPool } from './async-pool.interface';

/**
 * Cocos async pool constructor interface.
 *
 * @param srcObj
 * @param limit
 * @param iterator
 * @param onEnd
 * @param target
 * @constructor
 */
export interface CCAsyncPoolConstructor<
  T extends CCAsyncPool = CCAsyncPool,
  // eslint-disable-next-line @typescript-eslint/ban-types
  U extends any[] = [object | Array<unknown>, number, Function, Function, object]
> extends Constructor<T, U> {}
