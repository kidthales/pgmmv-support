/**
 * Agtk plugin number UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBaseParameter } from './base-parameter.interface';
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin number UI parameter interface.
 */
export interface AgtkNumberParameter extends AgtkBaseParameter {
  type: AgtkParameterType.Number;
  defaultValue: number;
  decimals?: number;
  minimumValue?: number;
  maximumValue?: number;
}
