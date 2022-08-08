/**
 * Cocos scroll view constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCLayer, CCLayerConstructor } from '../layer';
import type { CCSize } from '../size';

import type { CCScrollView } from './scroll-view.interface';

/**
 * Cocos scroll view constructor interface.
 *
 * @param size View size.
 * @param container Parent object.
 * @constructor
 */
export interface CCScrollViewConstructor<T extends CCScrollView = CCScrollView, U extends any[] = [CCSize, CCLayer]>
  extends CCLayerConstructor<T, U> {}
