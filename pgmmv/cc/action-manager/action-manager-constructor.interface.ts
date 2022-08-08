/**
 * Cocos action manager constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCActionManager } from './action-manager.interface';

/**
 * Cocos action manager constructor interface.
 *
 * @constructor
 */
export interface CCActionManagerConstructor<T extends CCActionManager = CCActionManager, U extends any[] = never>
  extends CCClassConstructor<T, U> {}
