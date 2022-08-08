/**
 * Cocos affine transform constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCAffineTransform } from './affine-transform.interface';

/**
 * Cocos affine transform constructor interface.
 *
 * @param a
 * @param b
 * @param c
 * @param d
 * @param tx
 * @param ty
 * @constructor
 */
export interface CCAffineTransformConstructor<
  T extends CCAffineTransform = CCAffineTransform,
  U extends any[] = [number, number, number, number, number, number]
> extends Constructor<T, U> {}
