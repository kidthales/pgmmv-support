/**
 * Cocos menu passive interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCLayer } from '../layer';
import type { CCMenuItem } from '../menu-item';

/**
 * MenuPassive: The menu passive ui component.
 */
export interface CCMenuPassive extends CCLayer {
  /**
   * Align items horizontally.
   */
  alignItemsHorizontally(): void;

  /**
   * Align items horizontally with specified padding.
   *
   * @param padding
   * @since v0.7.2
   */
  alignItemsHorizontallyWithPadding(padding: number): void;

  /**
   * Align items in columns.
   *
   * @param args
   */
  alignItemsInColumns(...args: number[]): void;

  /**
   * Align menu items in rows
   *
   * @param args
   */
  alignItemsInRows(...args: number[]): void;

  /**
   * Align items vertically with default padding.
   */
  alignItemsVertically(): void;

  /**
   * Align items vertically with specified padding.
   *
   * @param padding
   * @since v0.7.2
   */
  alignItemsVerticallyWithPadding(padding: number): void;

  /**
   * Color: conforms with CCRGBAProtocol protocol.
   */
  getColor(): CCColor;

  /**
   * Opacity: conforms with CCRGBAProtocol protocol.
   */
  getOpacity(): number;

  /**
   * Initializes a CCMenu with it's items.
   *
   * @param item
   * @param args
   */
  initWithItems(item: CCMenuItem, args: CCMenuItem[]): boolean;
}
