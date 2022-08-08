/**
 * Cocos scene constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';

import type { CCScene } from './scene.interface';

/**
 * Cocos scene constructor interface.
 *
 * @constructor
 */
export interface CCSceneConstructor<T extends CCScene = CCScene, U extends any[] = never>
  extends CCNodeConstructor<T, U> {}
