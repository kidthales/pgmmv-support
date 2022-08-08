/**
 * Variable value accessor interface module.
 *
 * @packageDocumentation
 * @internal
 */
import type { ValueAccessor } from './value-accessor.interface';

/**
 * Variable value accessor interface (number).
 *
 * @internal
 */
export interface VariableValueAccessor extends ValueAccessor<number> {}
