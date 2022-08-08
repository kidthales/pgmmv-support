/**
 * Cocos v3f c4b t2f quad interface module.
 *
 * @packageDocumentation
 */
import type { CCV3F_C4B_T2F } from '../v3f-c4b-t2f';

/**
 * Cocos v3f c4b t2f quad interface.
 */
export interface CCV3F_C4B_T2F_Quad {
  tl: CCV3F_C4B_T2F;
  tr: CCV3F_C4B_T2F;
  bl: CCV3F_C4B_T2F;
  br: CCV3F_C4B_T2F;
  readonly arrayBuffer: ArrayBuffer;
}
