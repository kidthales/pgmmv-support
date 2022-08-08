/**
 * Agtk action commands object move constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands object move constants interface.
 */
export interface AgtkObjectMove {
  /**
   * Move with direction.
   */
  readonly MoveWithDirection: 0;

  /**
   * Move to position.
   */
  readonly MoveToPosition: 1;

  /**
   * Move to object center.
   */
  readonly MoveToObjectCenter: 2;

  /**
   * Move to object origin.
   */
  readonly MoveToObjectOrigin: 3;

  /**
   * Move to object connection point.
   */
  readonly MoveToObjectConnectionPoint: 4;

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
