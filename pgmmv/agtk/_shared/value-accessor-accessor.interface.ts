/**
 * Generic value accessor accessor interface module.
 *
 * @packageDocumentation
 * @internal
 */
import type { SwitchValueAccessor } from './switch-value-accessor.interface';
import type { VariableValueAccessor } from './variable-value-accessor.interface';

/**
 * Generic value accessor accessor interface.
 *
 * @template T - Type of value accessor to be accessed.
 * @internal
 */
export interface ValueAccessorAccessor<T extends SwitchValueAccessor | VariableValueAccessor> {
  /**
   * Get value accessor.
   *
   * @param id - Value accessor ID.
   * @returns The value accessor.
   */
  get(id: number): T;

  /**
   * Get value accessor ID by name.
   *
   * @param name Accessor name.
   * @returns A value accessor ID when found, -1 otherwise.
   * @note Preset variable names may change according to language, so avoid
   * using this if possible.
   */
  getIdByName(name: string): number;
}
