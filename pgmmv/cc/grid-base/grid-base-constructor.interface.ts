/**
 * Cocos grid base constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';
import type { CCRect } from '../rect';
import type { CCSize } from '../size';
import type { CCTexture2D } from '../texture-2d';

import type { CCGridBase } from './grid-base.interface';

/**
 * Cocos grid base constructor interface.
 *
 * @param gridSize
 * @param texture
 * @param flipped
 * @param rect
 * @constructor
 */
export interface CCGridBaseConstructor<
  T extends CCGridBase = CCGridBase,
  U extends any[] = [CCSize, CCTexture2D?, boolean?, CCRect?]
> extends CCClassConstructor<T, U> {
  /**
   * Create one cc.GridBase Object.
   *
   * @param gridSize
   * @param texture
   * @param flipped
   * @param rect
   */
  create(...args: U): CCGridBase;
}
