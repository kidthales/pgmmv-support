/**
 * Cocos sprite batch node constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';
import type { CCTexture2D } from '../texture-2d';

import type { CCSpriteBatchNode } from './sprite-batch-node.interface';

/**
 * Cocos sprite batch node constructor interface.
 *
 * @param fileImage
 * @constructor
 */
export interface CCSpriteBatchNodeConstructor<
  T extends CCSpriteBatchNode = CCSpriteBatchNode,
  U extends any[] = [string | CCTexture2D]
> extends CCNodeConstructor<T, U> {
  /**
   * @deprecated since v3.0, please use new construction instead.
   */
  createWithTexture(...args: U): T;
}
