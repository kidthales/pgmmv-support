/**
 * Generic constructor interface module.
 *
 * @packageDocumentation
 * @internal
 */

/**
 * Generic constructor interface.
 *
 * @internal
 */
export const Constructor = Function;
export interface Constructor<T extends {} = {}, U extends any[] = never> extends Function {
  /**
   * Generic constructor signature.
   */
  new (...args: U): T;
}
