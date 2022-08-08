/**
 * Agtk plugin base UI parameter interface module.
 *
 * @packageDocumentation
 * @internal
 */
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin base UI parameter interface.
 *
 * @internal
 */
export interface AgtkBaseParameter {
  /**
   * Parameter ID.
   */
  id: number;

  /**
   * Parameter name.
   */
  name: string;

  /**
   * Parameter type.
   */
  type: AgtkParameterType;

  /**
   * Parameter default value.
   */
  defaultValue?: unknown;
}
