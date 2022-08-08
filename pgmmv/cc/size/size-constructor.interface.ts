/**
 * Cocos size constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCSize } from './size.interface';

/**
 * Cocos size constructor interface.
 *
 * @param width
 * @param height
 * @constructor
 */
export interface CCSizeConstructor<T extends CCSize = CCSize, U extends any[] = [number, number]>
  extends Constructor<T, U> {}
