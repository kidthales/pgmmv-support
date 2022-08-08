/**
 * Switch value accessor interface module.
 *
 * @packageDocumentation
 * @internal
 */
import type { ValueAccessor } from './value-accessor.interface';

/**
 * Switch value accessor interface (boolean).
 *
 * @internal
 */
export interface SwitchValueAccessor extends ValueAccessor<boolean> {}
