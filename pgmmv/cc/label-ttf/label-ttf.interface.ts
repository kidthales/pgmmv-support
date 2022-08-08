/**
 * Cocos label TTF interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCFontDefinition } from '../font-definition';
import type { CCSize } from '../size';
import type { CCSprite } from '../sprite';

/**
 * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels with system font or a ttf font file.
 * All features from cc.Sprite are valid in cc.LabelTTF.
 * cc.LabelTTF objects are slow for js-binding on mobile devices.
 * Consider using cc.LabelAtlas or cc.LabelBMFont instead.
 * You can create a cc.LabelTTF from a font name, alignment, dimension and font size or a cc.FontDefinition object.
 * ```
 * var myLabel = new cc.LabelTTF('label text',  'Times New Roman', 32, cc.size(320,32), cc.TEXT_ALIGNMENT_LEFT);
 *
 * var fontDef = new cc.FontDefinition();
 * fontDef.fontName = "Arial";
 * fontDef.fontSize = "32";
 * var myLabel = new cc.LabelTTF('label text',  fontDef);
 * ```
 */
export interface CCLabelTTF extends CCSprite {
  /**
   * Height of the bounding box of label, the real content height is limited by boundingHeight.
   */
  boundingHeight: number;

  /**
   * Width of the bounding box of label, the real content width is limited by boundingWidth.
   */
  boundingWidth: number;

  /**
   * The fill color.
   */
  fillStyle: CCColor;

  /**
   * The label font with a style string: e.g. "18px Verdana".
   */
  font: string;

  /**
   * Font name of label.
   */
  fontName: string;

  /**
   * Font size of label.
   */
  fontSize: number;

  /**
   * The line width for stroke.
   */
  lineWidth: number;

  /**
   * The blur size of shadow.
   */
  shadowBlur: number;

  /**
   * The x axis offset of shadow.
   */
  shadowOffsetX: number;

  /**
   * The y axis offset of shadow.
   */
  shadowOffsetY: number;

  /**
   * The opacity of shadow.
   */
  shadowOpacity: number;

  /**
   * Content string of label.
   */
  string: string;

  /**
   * The stroke color.
   */
  strokeStyle: CCColor;

  /**
   * Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT.
   */
  textAlign: number;

  /**
   * Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM.
   */
  verticalAlign: number;

  /**
   * Disable shadow rendering.
   */
  disableShadow(): void;

  /**
   * Disable label stroke.
   */
  disableStroke(): void;

  /**
   * Enable or disable shadow for the label
   * ```
   *   old:
   *     labelttf.enableShadow(shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur);
   *   new:
   *     labelttf.enableShadow(shadowColor, offset, blurRadius);
   * ```
   *
   * @param a Color or The x axis offset of the shadow.
   * @param b Size or The y axis offset of the shadow.
   * @param c The blur size of the shadow or The opacity of the shadow (0 to 1).
   * @param d Null or The blur size of the shadow.
   */
  enableShadow(a: CCColor | number, b: CCSize | number, c: number, d: number | null): void;

  /**
   * Enable label stroke with stroke parameters.
   *
   * @param strokeColor The color of stroke.
   * @param strokeSize The size of stroke.
   */
  enableStroke(strokeColor: CCColor, strokeSize: number): void;

  /**
   * Returns the actual content size of the label, the content size is the real
   * size that the label occupied while dimension is the outer bounding box of the label.
   */
  getContentSize(): CCSize;

  /**
   * Returns the dimensions of cc.LabelTTF, the dimension is the maximum size of the label,
   * set it so that label will automatically change lines when necessary.
   */
  getDimensions(): CCSize;

  /**
   * Returns font name of cc.LabelTTF.
   */
  getFontName(): string;

  /**
   * Returns font size of cc.LabelTTF.
   */
  getFontSize(): number;

  /**
   * Returns Horizontal Alignment of cc.LabelTTF.
   */
  getHorizontalAlignment(): number;

  /**
   * Returns the scale factor of the node.
   */
  getScale(): number;

  /**
   * Returns the scale factor on X axis of this node.
   */
  getScaleX(): number;

  /**
   * Returns the scale factor on Y axis of this node.
   */
  getScaleY(): number;

  /**
   * Returns the text of the label.
   */
  getString(): string;

  /**
   * Extract the text definition used by this label.
   */
  getTextDefinition(): CCFontDefinition;

  /**
   * Returns Vertical Alignment of cc.LabelTTF.
   */
  getVerticalAlignment(): number;

  /**
   * Initializes the cc.LabelTTF with a font name, alignment, dimension and font size,
   * do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
   *
   * @param label
   * @param fontName
   * @param fontSize
   * @param dimensions
   * @param hAlignment
   * @param vAlignment
   */
  initWithString(
    label: string,
    fontName: string,
    fontSize: number,
    dimensions?: CCSize,
    hAlignment?: number,
    vAlignment?: number
  ): boolean;

  /**
   * Initializes the CCLabelTTF with a font name, alignment, dimension and font size,
   * do not call it by yourself, you should pass the correct arguments in constructor to initialize the label.
   *
   * @param text
   * @param textDefinition
   */
  initWithStringAndTextDefinition(text: string, textDefinition: CCFontDefinition): boolean;

  /**
   * Set Dimensions of cc.LabelTTF, the dimension is the maximum size of the label,
   * set it so that label will automatically change lines when necessary.
   *
   * @param dim Dimensions or width of dimensions.
   * @param height Height of dimensions.
   */
  setDimensions(dim: CCSize | number, height?: number): void;

  /**
   * Set Target to draw on.
   *
   * @param b onCanvas
   */
  setDrawMode(b: boolean): void;

  /**
   * Sets the text fill color.
   *
   * @param fillColor The fill color of the label.
   */
  setFontFillColor(fillColor: CCColor): void;

  /**
   * Sets font name of cc.LabelTTF.
   *
   * @param fontName
   */
  setFontName(fontName: string): void;

  /**
   * Sets font size of cc.LabelTTF.
   *
   * @param fontSize
   */
  setFontSize(fontSize: number): void;

  /**
   * Sets Horizontal Alignment of cc.LabelTTF.
   *
   * @param alignment Horizontal Alignment
   */
  setHorizontalAlignment(alignment: number): void;

  /**
   * Sets the scale factor of the node. 1.0 is the default scale factor.
   * This function can modify the X and Y scale at the same time.
   *
   * @param scale or scaleX value.
   * @param scaleY
   */
  setScale(scale: number, scaleY?: number): void;

  /**
   * Changes the scale factor on X axis of this node.
   * The default value is 1.0 if you haven't changed it before.
   *
   * @param newScaleX The scale factor on X axis.
   */
  setScaleX(newScaleX: number): void;

  /**
   * Changes the scale factor on Y axis of this node.
   * The Default value is 1.0 if you haven't changed it before.
   *
   * @param newScaleY The scale factor on Y axis.
   */
  setScaleY(newScaleY: number): void;

  /**
   * Changes the text content of the label.
   *
   * @param text Text content for the label.
   */
  setString(text: string): void;

  /**
   * Sets the text definition used by this label.
   *
   * @param theDefinition
   */
  setTextDefinition(theDefinition: CCFontDefinition): void;

  /**
   * Sets Vertical Alignment of cc.LabelTTF.
   *
   * @param verticalAlignment
   */
  setVerticalAlignment(verticalAlignment: number): void;
}
