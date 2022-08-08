/**
 * Agtk UI parameter type module.
 *
 * @packageDocumentation
 */
import type { AgtkCustomIdParameter } from './custom-id-parameter';
import type { AgtkEmbeddedParameter } from './embedded-parameter.interface';
import type { AgtkIdParameter } from './id-parameter.interface';
import type { AgtkJsonParameter } from './json-parameter.interface';
import type { AgtkNumberParameter } from './number-parameter.interface';
import type { AgtkStringParameter } from './string-parameter.interface';

/**
 * Agtk UI parameter type.
 */
export type AgtkParameter =
  | AgtkStringParameter
  | AgtkJsonParameter
  | AgtkNumberParameter
  | AgtkIdParameter
  | AgtkCustomIdParameter
  | AgtkEmbeddedParameter;
