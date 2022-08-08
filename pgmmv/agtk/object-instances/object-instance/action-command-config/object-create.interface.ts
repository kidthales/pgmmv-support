/**
 * Agtk object instance object create action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectCreateValue as AgtkCreatePosition } from '../../../constants/action-commands/object-create';

/**
 * Agtk object instance object create action command configuration interface.
 */
export interface AgtkObjectCreate {
  /**
   * Value -1 or 1+. WARNING: Game will crash if value is 0 or a nonexistent
   * object ID positive number.
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value -1 or 1+. Note: If actionId doesn't exist, default action will apply.
   *  - -1 = Default Action
   *  - 1+ = Any actions you may have
   */
  actionId: number;

  /**
   * Value 0 or 1. Note: If outside that value, action will be null.
   *  - 0 = Center of This Object
   *  - 1 = Center of Object Locked by This Object
   */
  createPosition: AgtkCreatePosition;

  /**
   * Value true/false.
   *  - True = Use Connection Point
   *  - False = Don't use Connection Point
   */
  useConnect: boolean;

  /**
   * Value -1 or 1+. Note: If outside an existing value, action will be null.
   *  - -1 = Not Set
   *  - 1+ = Any connection points you may have
   */
  connectId: number;

  /**
   * Value any integer.
   */
  adjustX: number;

  /**
   * Value any integer.
   */
  adjustY: number;

  /**
   * Value any float 0.00 - 100.00.
   */
  probability: number;

  /**
   * Value true/false.
   *  - True = Generate as child
   *  - False = Don't generate as child
   */
  childObject: boolean;

  /**
   * Value true/false.
   *  - True = Match generated objects direction to this object
   *  - False = Don't match direction
   */
  useRotation: boolean;

  /**
   * Value true/false.
   *  - True = Make generated object display below this object
   *  - False = Make generated object display above this object
   */
  lowerPriority: boolean;

  /**
   * Value true/false.
   *  - True = Snap generated object to grid
   *  - False = Don't snap to grid
   */
  gridMagnet: boolean;
}
