/**
 * Agtk plugin string UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBaseParameter } from './base-parameter.interface';
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin string UI parameter interface.
 */
export interface AgtkStringParameter extends AgtkBaseParameter {
  type: AgtkParameterType.String | AgtkParameterType.MultiLineString;
  defaultValue: string;
}
