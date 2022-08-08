/**
 * Cocos menu passive constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCLayerConstructor } from '../layer';
import { CCMenuItem } from '../menu-item';

import type { CCMenuPassive } from './menu-passive.interface';

/**
 * Cocos menu passive constructor interface.
 *
 * @param menuItem
 * @constructor
 */
export interface CCMenuPassiveConstructor<T extends CCMenuPassive = CCMenuPassive, U extends any[] = [...CCMenuItem[]]>
  extends CCLayerConstructor<T, U> {}
