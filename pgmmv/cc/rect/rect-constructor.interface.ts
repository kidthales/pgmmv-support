/**
 * Cocos rectangle constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCRect } from './rect.interface';

/**
 * Cocos rectangle constructor interface.
 *
 * @param x
 * @param y
 * @param width
 * @param height
 * @constructor
 */
export interface CCRectConstructor<T extends CCRect = CCRect, U extends any[] = [number, number, number, number]>
  extends Constructor<T, U> {}
