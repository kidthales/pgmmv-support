/**
 * Agtk plugin parameter value interface module.
 *
 * @packageDocumentation
 */
import type { JsonValue } from 'type-fest';

/**
 * Agtk plugin parameter value interface.
 */
export interface AgtkParameterValue {
  /**
   * Parameter ID.
   */
  id: number;

  /**
   * Parameter value.
   */
  value: JsonValue;
}
