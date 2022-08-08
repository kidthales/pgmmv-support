/**
 * Agtk object bullets interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBullet } from './bullet';

/**
 * Bullet data set in "Bullet Settings".
 */
export interface AgtkBullets {
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
  get(arg: number): AgtkBullet;
}
