/**
 * Agtk plugin embedded UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBaseParameter } from './base-parameter.interface';
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin embedded UI parameter interface.
 */
export interface AgtkEmbeddedParameter extends AgtkBaseParameter {
  type: AgtkParameterType.Embedded | AgtkParameterType.EmbeddedEditable;
  sourceId: number;
  reference?: string;
  width?: number;
  height?: number;
}
