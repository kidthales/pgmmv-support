/**
 * Cocos class constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCClass } from './class.interface';

/**
 * Cocos class constructor interface.
 *
 * @constructor
 */
export interface CCClassConstructor<T extends CCClass = CCClass, U extends any[] = never> extends Constructor<T, U> {
  /**
   * Create a new Class that inherits from this Class.
   *
   * @param props
   */
  extends<V extends this>(props: Record<string, unknown>): V;
}
