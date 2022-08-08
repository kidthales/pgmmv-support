/**
 * Cocos blend function constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCBlendFunc } from './blend-func.interface';

/**
 * Cocos blend function constructor interface.
 *
 * @param src1 Source blend function.
 * @param dst1 Destination blend function.
 * @constructor
 */
export interface CCBlendFuncConstructor<T extends CCBlendFunc = CCBlendFunc, U extends any[] = [number, number]>
  extends Constructor<T, U> {}
