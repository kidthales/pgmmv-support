/**
 * Agtk object instance bullet fire action command configuration interface
 * module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance bullet fire action command configuration interface.
 */
export interface AgtkBulletFire {
  /**
   * Value -1 or 1+. WARNING: If non-existing bulletId, game will crash.
   *  - -1 = Not Set
   *  - 1+ = Any created bullet settings you may have, first bullet = 1
   */
  bulletId: number;

  /**
   * Value -1 or 1+. Note: If outside an existing value, action will be null.
   *  - -1 = Not Set
   *  - 1+ = Any connection points you may have
   */
  connectId: number;
}
