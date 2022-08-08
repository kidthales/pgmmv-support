/**
 * Agtk images interface module.
 *
 * @packageDocumentation
 */
import type { AgtkImage } from './image';

/**
 * Agtk images interface.
 */
export interface AgtkImages {
  /**
   *
   */
  getCount(): number;

  /**
   *
   * @param arg
   */
  getIdByIndex(arg: number): number;

  /**
   *
   * @param arg
   */
  getIdByName(arg: string): number;

  /**
   *
   * @param arg
   */
  getById(arg: number): AgtkImage;

  /**
   *
   */
  getIdList(): number[];

  /**
   *
   * @param arg
   */
  get(arg: number): AgtkImage;
}
