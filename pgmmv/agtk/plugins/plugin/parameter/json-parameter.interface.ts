/**
 * Agtk plugin JSON UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { JsonValue } from 'type-fest';

import type { AgtkBaseParameter } from './base-parameter.interface';
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin JSON UI parameter interface.
 */
export interface AgtkJsonParameter extends AgtkBaseParameter {
  type: AgtkParameterType.Json;
  defaultValue: JsonValue;
}
