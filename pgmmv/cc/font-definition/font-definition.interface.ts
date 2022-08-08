/**
 * Cocos font definition interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';

/**
 * Common usage:
 * ```
 * var fontDef = new cc.FontDefinition();
 * fontDef.fontName = "Arial";
 * fontDef.fontSize = 12;
 * ```
 * ... OR using inline definition useful for constructor injection
 * ```
 * var fontDef = new cc.FontDefinition({ fontName: "Arial", fontSize: 12 });
 * ```
 */
export interface CCFontDefinition {
  fontName: string;
  fontSize: number;
  textAlign: number;
  verticalAlign: number;
  fillStyle: CCColor;
  boundingWidth: number;
  boundingHeight: number;
  strokeEnabled: boolean;
  strokeStyle: CCColor;
  lineWidth: number;
  lineHeight: string;
  fontStyle: string;
  fontWeight: string;
  shadowEnabled: boolean;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowBlur: number;
  shadowOpacity: number;
}
