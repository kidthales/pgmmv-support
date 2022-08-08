/**
 * Cocos menu item toggle constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItem, CCMenuItemConstructor } from '../menu-item';
import type { CCNode } from '../node';

import type { CCMenuItemToggle } from './menu-item-toggle.interface';

/**
 * Cocos menu item toggle constructor interface.
 *
 * @param params
 * @constructor
 */
export interface CCMenuItemToggleConstructor<
  T extends CCMenuItemToggle = CCMenuItemToggle,
  U extends any[] = [...CCMenuItem[], Function | string | undefined, CCNode | undefined]
> extends CCMenuItemConstructor<T, U> {}
