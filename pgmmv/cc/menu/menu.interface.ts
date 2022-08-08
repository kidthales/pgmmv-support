/**
 * Cocos menu interface module.
 *
 * @packageDocumentation
 */
import type { CCLayer } from '../layer';
import type { CCMenuItem } from '../menu-item';
import type { CCNode } from '../node';

/**
 * Features and Limitation:
 *  - You can add MenuItem objects in runtime using addChild:
 *    - But the only accepted children are MenuItem objects.
 *
 * ```
 * var layer = new cc.Menu(menuitem1, menuitem2, menuitem3);
 * ```
 */
export interface CCMenu extends CCLayer {
  /**
   * Add a child for cc.Menu.
   *
   * @param child Menu only supports MenuItem objects as children.
   * @param zOrder zOrder for the child.
   * @param tag Tag for the child.
   */
  addChild(child: CCMenuItem, zOrder?: number, tag?: number): void;

  /**
   * Align items horizontally with default padding.
   */
  alignItemsHorizontally(): void;

  /**
   * Align items horizontally with specified padding.
   *
   * @param padding
   */
  alignItemsHorizontallyWithPadding(padding: number): void;

  /**
   * Align items in columns.
   *
   * ```
   * // Example
   * menu.alignItemsInColumns(3,2,3); // this will create 3 columns, with 3 items for first column, 2 items for second and 3 for third
   *
   * menu.alignItemsInColumns(3,3); // this creates 2 columns, each have 3 items
   * ```
   *
   * @param args
   */
  alignItemsInColumns(...args: number[]): void;

  /**
   * Align menu items in rows
   *
   * ```
   * // Example
   * menu.alignItemsInRows(5,3); // this will align items to 2 rows, first row with 5 items, second row with 3
   *
   * menu.alignItemsInRows(4,4,4,4); // this creates 4 rows each have 4 items
   * ```
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
   */
  alignItemsVerticallyWithPadding(padding: number): void;

  /**
   * Initializes a cc.Menu with a Array of cc.MenuItem objects.
   *
   * @param arrayOfItems Array of cc.MenuItem items.
   */
  initWithArray(arrayOfItems: CCMenuItem[]): boolean;

  /**
   * Initializes a cc.Menu with it's items.
   *
   * @param args
   */
  initWithItems(...args: CCMenuItem[]): boolean;

  /**
   * Return whether or not the menu will receive events.
   */
  isEnabled(): boolean;

  /**
   * Only use for jsbinding.
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Event callback that is invoked every time when CCMenu enters the 'stage'.
   * If the CCMenu enters the 'stage' with a transition, this event is called
   * when the transition starts. During onEnter you can't access a
   * "sister/brother" node. If you override onEnter, you must call its parent's
   * onEnter function with this._super().
   */
  onEnter(): void;

  /**
   * Callback that is called every time the cc.Menu leaves the 'stage'. If the
   * cc.Menu leaves the 'stage' with a transition, this callback is called when
   * the transition finishes. During onExit you can't access a sibling node. If
   * you override onExit, you shall call its parent's onExit with this._super().
   */
  onExit(): void;

  /**
   * Remove a child from cc.Menu.
   *
   * @param child The child you want to remove.
   * @param cleanup Whether to cleanup.
   */
  removeChild(child: CCNode, cleanup?: boolean): void;

  /**
   * Set whether or not the menu will receive events.
   *
   * @param enabled
   */
  setEnabled(enabled: boolean): void;

  /**
   * Only use for jsbinding.
   *
   * @param value
   */
  setOpacityModifyRGB(value: unknown): void;
}
