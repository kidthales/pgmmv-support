/**
 * Agtk action commands object push pull constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands object push pull constants interface.
 */
export interface AgtkObjectPushPull {
  /**
   * Direction angle.
   */
  readonly DirectionAngle: 0;

  /**
   * Direction object display.
   */
  readonly DirectionObjectDisp: 1;

  /**
   * Effect direction angle.
   */
  readonly EffectDirectionAngle: 0;

  /**
   * Effect direction object display.
   */
  readonly EffectDirectionObjectDisp: 1;

  /**
   * Effect direction object connect.
   */
  readonly EffectDirectionObjectConnect: 2;

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
   * Targeting by touched.
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
