/**
 * Cocos class interface module.
 *
 * @packageDocumentation
 */

/**
 * The base Class implementation (does nothing).
 */
export interface CCClass {
  /**
   * @protected
   */
  _super(...args: any[]): void;
}
