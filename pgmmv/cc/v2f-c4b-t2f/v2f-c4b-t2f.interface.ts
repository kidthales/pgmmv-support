/**
 * Cocos v2f c4b t2f interface module.
 *
 * @packageDocumentation
 */
import type { CCColor } from '../color';
import type { CCTex2F } from '../tex-2f';
import type { CCVertex2F } from '../vertex-2f';

/**
 * Cocos v2f c4b t2f interface.
 */
export interface CCV2F_C4B_T2F {
  vertices: CCVertex2F;
  colors: CCColor;
  texCoords: CCTex2F;
}
