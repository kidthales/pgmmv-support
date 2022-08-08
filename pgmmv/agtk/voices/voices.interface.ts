/**
 * Agtk voices interface module.
 *
 * @packageDocumentation
 */
import type { AgtkVoice } from './voice';

/**
 * Agtk voices interface.
 */
export interface AgtkVoices {
  /**
   *
   */
  getIdList(): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkVoice;
}
