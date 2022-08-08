/**
 * Agtk common variables key type module.
 *
 * @packageDocumentation
 */
import type { AgtkVariables } from './variables.interface';

/**
 * Agtk Common variables key type.
 */
export type AgtkVariablesKey = Exclude<keyof AgtkVariables, 'get' | 'getIdByName'>;
