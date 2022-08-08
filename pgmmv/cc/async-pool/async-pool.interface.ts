/**
 * Cocos async pool interface module.
 *
 * @packageDocumentation
 */

/**
 * Cocos async pool interface.
 */
export interface CCAsyncPool {
  size: number;
  finishedSize: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onIterator(iterator: Function, target: object): void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onEnd(endCb: Function, endCbTarget: object): void;
  flow(): void;
}
