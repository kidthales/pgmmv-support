/**
 * Cocos menu constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCLayerConstructor } from '../layer';
import { CCMenuItem } from '../menu-item';

import type { CCMenu } from './menu.interface';

/**
 * Cocos menu constructor interface.
 *
 * @param menuItem
 * @constructor
 */
export interface CCMenuConstructor<T extends CCMenu = CCMenu, U extends any[] = [...CCMenuItem[]]>
  extends CCLayerConstructor<T, U> {}
