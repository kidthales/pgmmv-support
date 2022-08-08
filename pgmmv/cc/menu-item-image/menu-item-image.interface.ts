/**
 * Cocos menu item image interface module.
 *
 * @packageDocumentation
 */
import type { CCMenuItemSprite } from '../menu-item-sprite';
import type { CCNode } from '../node';
import type { CCSpriteFrame } from '../sprite-frame';

/**
 * cc.MenuItemImage accepts images as items.
 *
 * The images has 3 different states:
 *  - unselected image
 *  - selected image
 *  - disabled image
 *
 * For best results try that all images are of the same size.
 *
 * ```
 * var menuItem = new cc.MenuItemImage(normalImage, selectedImage, three, four, five);
 * ```
 */
export interface CCMenuItemImage extends CCMenuItemSprite {
  /**
   * Initializes a cc.MenuItemImage.
   *
   * @param normalImage File name for normal state.
   * @param selectedImage Image for selected state.
   * @param disabledImage Disabled image.
   * @param callback Callback function, either name in string or pass the whole
   * function.
   * @param target cc.Node target to run callback when clicked.
   */
  initWithNormalImage(
    normalImage?: string,
    selectedImage?: string,
    disabledImage?: string,
    callback?: Function | string,
    target?: CCNode
  ): boolean;
  /**
   * Sets the sprite frame for the disabled image.
   *
   * @param frame
   */
  setDisabledSpriteFrame(frame: CCSpriteFrame): void;

  /**
   * Sets the sprite frame for the normal image.
   *
   * @param frame
   */
  setNormalSpriteFrame(frame: CCSpriteFrame): void;

  /**
   * Sets the sprite frame for the selected image.
   *
   * @param frame
   */
  setSelectedSpriteFrame(frame: CCSpriteFrame): void;
}
