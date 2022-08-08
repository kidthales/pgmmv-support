/**
 * Cocos event constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCEvent } from './event.interface';

/**
 * Cocos event constructor interface.
 *
 * @constructor
 */
export interface CCEventConstructor<T extends CCEvent = CCEvent, U extends any[] = never>
  extends CCClassConstructor<T, U> {
  /**
   * The type code of Touch event.
   */
  readonly TOUCH: 0;

  /**
   * The type code of Keyboard event.
   */
  readonly KEYBOARD: 1;

  /**
   * The type code of Acceleration event.
   */
  readonly ACCELERATION: 2;

  /**
   * The type code of Mouse event.
   */
  readonly MOUSE: 3;

  /**
   * The type code of UI focus event.
   */
  readonly FOCUS: 4;

  /**
   * The type code of Custom event.
   */
  readonly CUSTOM: 6;
}
