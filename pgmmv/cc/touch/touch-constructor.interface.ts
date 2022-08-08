/**
 * Cocos touch constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCTouch } from './touch.interface';

/**
 * Cocos touch constructor interface.
 *
 * @constructor
 */
export interface CCTouchConstructor<T extends CCTouch = CCTouch, U extends any[] = never>
  extends CCClassConstructor<T, U> {}
