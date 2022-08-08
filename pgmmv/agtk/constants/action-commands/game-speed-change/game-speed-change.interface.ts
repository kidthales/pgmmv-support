/**
 * Agtk action commands game speed change constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands game speed change constants interface.
 */
export interface AgtkGameSpeedChange {
  /**
   * Targeting by type.
   *
   * @note Developer Typo
   */
  readonly TargettingByType: 0;

  /**
   * Targeting by group.
   *
   * @note Developer Typo
   */
  readonly TargettingByGroup: 0;

  /**
   * Targeting by ID.
   *
   * @note Developer Typo
   */
  readonly TargettingById: 1;

  /**
   * Targeting touched.
   *
   * @note Developer Typo
   */
  readonly TargettingTouched: 2;

  /**
   * Targeting locked.
   *
   * @note Developer Typo
   */
  readonly TargettingLocked: 3;
}
