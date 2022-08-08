/**
 * Cocos node constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCNode } from './node.interface';

/**
 * Cocos node constructor interface.
 *
 * @constructor
 */
export interface CCNodeConstructor<T extends CCNode = CCNode, U extends any[] = never>
  extends CCClassConstructor<T, U> {
  /**
   * Allocates and initializes a node.
   *
   * @deprecated since v3.0, please use new construction instead.
   */
  create(...args: U): T | null;
}
