/**
 * Cocos label TTF constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCFontDefinition } from '../font-definition';
import type { CCSize } from '../size';
import type { CCSpriteConstructor } from '../sprite';

import type { CCLabelTTF } from './label-ttf.interface';

/**
 * Cocos label TTF constructor interface.
 *
 * @param text
 * @param fontName Default: "Arial"
 * @param fontSize Default: 16
 * @param dimensions Default: cc.size(0,0)
 * @param hAlignment cc.TEXT_ALIGNMENT_LEFT
 * @param vAlignment cc.VERTICAL_TEXT_ALIGNMENT_TOP
 * @param aliasThreshold
 * @constructor
 */
export interface CCLabelTTFConstructor<
  T extends CCLabelTTF = CCLabelTTF,
  U extends any[] = [string?, (string | CCFontDefinition)?, number?, CCSize?, number?, number?, number?]
> extends CCSpriteConstructor<T, U> {
  /**
   * Creates a cc.LabelTTF from a font name, alignment, dimension and font size.
   *
   * @param text
   * @param fontName Default: "Arial"
   * @param fontSize Default: 16
   * @param dimensions Default: cc.size(0,0)
   * @param hAlignment cc.TEXT_ALIGNMENT_LEFT
   * @param vAlignment cc.VERTICAL_TEXT_ALIGNMENT_TOP
   * @deprecated since v3.0, please use the new construction instead.
   */
  create(...args: U): T;

  /**
   * @param def
   * @deprecated since v3.0, please use the new construction instead.
   */
  createWithFontDefinition<D extends CCFontDefinition>(def: D): T;
}
