/**
 * Agtk link condition attack area near constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk link condition attack area near constants interface.
 */
export interface AgtkAttackAreaNear {
  /**
   * Distance none.
   */
  readonly DistanceNone: 0;

  /**
   * Distance greater than or equal to.
   */
  readonly DistanceGreaterEqual: 1;

  /**
   * Distance less than or equal to.
   */
  readonly DistanceLessEqual: 2;

  /**
   * Set by object group.
   */
  readonly SetByObjectGroup: 0;

  /**
   * Set by object ID.
   */
  readonly SetByObjectId: 1;

  /**
   * Attribute none.
   */
  readonly AttributeNone: 0;

  /**
   * Attribute preset.
   */
  readonly AttributePreset: 1;

  /**
   * Attribute value.
   */
  readonly AttributeValue: 2;
}
