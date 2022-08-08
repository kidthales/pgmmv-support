/**
 * Cocos menu item toggle interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCMenuItem } from '../menu-item';
import type { CCNode } from '../node';

/**
 * A simple container class that "toggles" it's inner items.
 *
 * The inner items can be any MenuItem.
 *
 * ```
 * // Example
 * // create a toggle item with 2 menu items (which you can then toggle between them later)
 * var toggler = new cc.MenuItemToggle( new cc.MenuItemFont("On"), new cc.MenuItemFont("Off"), this.callback, this);
 * // Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
 *
 * // if you pass only 1 variable, then it must be a cc.MenuItem
 * var notYetToggler = new cc.MenuItemToggle(cc.MenuItemFont("On")); // it is useless right now, until you add more stuff to it
 * notYetToggler.addSubItem(new cc.MenuItemFont("Off"));
 * // this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
 * ```
 */
export interface CCMenuItemToggle extends CCMenuItem {
  /**
   * Index of selected sub item.
   */
  selectedIndex: number;

  /**
   * Sub items.
   */
  subItems: CCMenuItem[];

  /**
   * Add the subitem for cc.MenuItemToggle.
   *
   * @param item
   */
  addSubItem(item: CCMenuItem): void;

  /**
   * Return the color of cc.MenuItemToggle.
   */
  getColor(): CCColor;

  /**
   * Return the opacity of cc.MenuItemToggle.
   */
  getOpacity(): number;

  /**
   * Return the index of selected.
   */
  getSelectedIndex(): number;

  /**
   * Returns the selected item.
   */
  getSelectedItem(): CCMenuItem;

  /**
   * Similar to get children,return the subItem array.
   */
  getSubItems(): CCMenuItem[];

  /**
   * Initializes a cc.MenuItemToggle with items.
   *
   * @param array The rest in the array are cc.MenuItems.
   * @param secondTolast The second item in the args array is the callback.
   * @param last The first item in the args array is a target.
   */
  initWithItems(array: CCMenuItem[], secondTolast?: Function | string, last?: CCNode): boolean;

  /**
   * Event callback that is invoked every time when cc.MenuItemToggle enters the
   * 'stage'. If the cc.MenuItemToggle enters the 'stage' with a transition,
   * this event is called when the transition starts. During onEnter you can't
   * access a "sister/brother" node. If you override onEnter, you must call its
   * parent's onEnter function with this._super().
   */
  onEnter(): void;

  /**
   * Returns the selected item (deprecated in -x, please use getSelectedItem instead.)
   *
   * @deprecated
   */
  selectedItem(): CCMenuItem;

  /**
   * Set the color for cc.MenuItemToggle.
   *
   * @param color
   */
  setColor(color: CCColor): void;

  /**
   * Set the opacity for cc.MenuItemToggle.
   *
   * @param opacity
   */
  setOpacity(opacity: number): void;

  /**
   * Set the seleceted index for cc.MenuItemToggle.
   *
   * @param selectedIndex
   */
  setSelectedIndex(selectedIndex: number): void;

  /**
   * Set the subitem for cc.MenuItemToggle.
   *
   * @param subItems
   */
  setSubItems(subItems: CCMenuItem[]): void;
}
