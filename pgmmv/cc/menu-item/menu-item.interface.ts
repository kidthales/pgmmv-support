/**
 * Cocos menu item interface module.
 *
 * @packageDocumentation
 */
import type { CCNode } from '../node';
import type { CCRect } from '../rect';

/**
 * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem
 * objects.
 */
export interface CCMenuItem extends CCNode {
  /**
   * Call the selector with target.
   */
  activate(): void;

  /**
   * Initializes a cc.MenuItem with callback.
   *
   * @param callback
   * @param target
   */
  initWithCallback(callback: Function | string, target: CCNode): boolean;

  /**
   * Return whether MenuItem is Enabled.
   */
  isEnabled(): boolean;

  /**
   * Only use for jsbinding.
   */
  isOpacityModifyRGB(): boolean;

  /**
   * Return whether MenuItem is selected.
   */
  isSelected(): boolean;

  /**
   * Return rect value of cc.MenuItem.
   */
  rect(): CCRect;

  /**
   * Set the cc.MenuItem selected same as setIsSelected(true).
   */
  selected(): void;

  /**
   * Set the callback to the menu item.
   *
   * @param callback
   * @param target
   */
  setCallback(callback: Function | string, target: CCNode): void;

  /**
   * Set enable value of MenuItem.
   *
   * @param enable
   */
  setEnabled(enable: boolean): void;

  /**
   * Only use for jsbinding.
   *
   * @param value
   */
  setOpacityModifyRGB(value: unknown): void;

  /**
   * Set the target/selector of the menu item.
   *
   * @param selector
   * @param rec
   * @deprecated Since v3.0
   */
  setTarget(selector: Function | string, rec: CCNode): void;

  /**
   * Set the cc.MenuItem unselected same as setIsSelected(false).
   */
  unselected(): void;
}
