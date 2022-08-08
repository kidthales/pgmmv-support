/**
 * Cocos quaternion constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCQuaternion } from './quaternion.interface';

/**
 * Cocos quaternion constructor interface.
 *
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
export interface CCQuaternionConstructor<
  T extends CCQuaternion = CCQuaternion,
  U extends any[] = [number?, number?, number?, number?]
> extends Constructor<T, U> {}
