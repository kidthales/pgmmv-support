/**
 * Cocos layer constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCNodeConstructor } from '../node';

import type { CCLayer } from './layer.interface';

/**
 * Cocos layer constructor interface.
 *
 * @constructor
 */
export interface CCLayerConstructor<T extends CCLayer = CCLayer, U extends any[] = never>
  extends CCNodeConstructor<T, U> {}
