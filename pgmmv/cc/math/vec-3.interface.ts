/**
 * Cocos vector 3 interface module.
 *
 * @packageDocumentation
 */

/**
 * Cocos vector 3 interface.
 */
export interface CCVec3 {
  x: number;
  y: number;
  z: number;

  normalize(): void;
}
