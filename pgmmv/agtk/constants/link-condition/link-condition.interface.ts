/**
 * Agtk link condition constants interface module.
 *
 * @packageDocumentation
 */
import type { AgtkAttackAreaNear } from './attack-area-near';
import type { AgtkAttackAreaTouched } from './attack-area-touched';
import type { AgtkLocked } from './locked';
import type { AgtkObjectFacingDirection } from './object-facing-direction';
import type { AgtkObjectFacingEachOther } from './object-facing-each-other';
import type { AgtkObjectFacing } from './object-facing';
import type { AgtkObjectFound } from './object-found';
import type { AgtkObjectHit } from './object-hit';
import type { AgtkObjectNear } from './object-near';
import type { AgtkObjectWallTouched } from './object-wall-touched';
import type { AgtkSlopeTouched } from './slope-touched';

/**
 * Link condition constants interface.
 */
export interface AgtkLinkCondition {
  /**
   * Object wall touched.
   */
  readonly objectWallTouched: AgtkObjectWallTouched;

  /**
   * Object hit.
   */
  readonly objectHit: AgtkObjectHit;

  /**
   * Attack area touched.
   */
  readonly attackAreaTouched: AgtkAttackAreaTouched;

  /**
   * Attack area near.
   */
  readonly attackAreaNear: AgtkAttackAreaNear;

  /**
   * Object near.
   */
  readonly objectNear: AgtkObjectNear;

  /**
   * Object facing each other.
   */
  readonly objectFacingEachOther: AgtkObjectFacingEachOther;

  /**
   * Object facing.
   */
  readonly objectFacing: AgtkObjectFacing;

  /**
   * Object found.
   */
  readonly objectFound: AgtkObjectFound;

  /**
   * Object facing direction.
   */
  readonly objectFacingDirection: AgtkObjectFacingDirection;

  /**
   * Locked.
   */
  readonly locked: AgtkLocked;

  /**
   * Slope touched.
   */
  readonly slopeTouched: AgtkSlopeTouched;
}
