/**
 * Agtk plugin custom ID UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBaseParameter } from '../base-parameter.interface';
import type { AgtkParameterType } from '../parameter-type.enum';

import type { AgtkCustomIdParameterParameter } from './custom-id-parameter-parameter.interface';

/**
 * Agtk plugin custom ID UI parameter interface.
 */
export interface AgtkCustomIdParameter extends AgtkBaseParameter {
  type: AgtkParameterType.CustomId;
  customParam: AgtkCustomIdParameterParameter[];
  defaultValue: number;
}
