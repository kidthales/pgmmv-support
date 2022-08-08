/**
 * Agtk object instance object move action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectMove as AgtkObjectMoveConstant } from '../../../constants/action-commands/object-move';

/**
 * Agtk object move move type type.
 *
 * @internal
 */
type AgtkMoveType =
  | AgtkObjectMoveConstant['MoveWithDirection']
  | AgtkObjectMoveConstant['MoveToPosition']
  | AgtkObjectMoveConstant['MoveToObjectCenter']
  | AgtkObjectMoveConstant['MoveToObjectOrigin']
  | AgtkObjectMoveConstant['MoveToObjectConnectionPoint'];

/**
 * Agtk object move targeting type type.
 */
type AgtkTargetingType =
  | AgtkObjectMoveConstant['TargettingByType']
  | AgtkObjectMoveConstant['TargettingByGroup']
  | AgtkObjectMoveConstant['TargettingById']
  | AgtkObjectMoveConstant['TargettingTouched']
  | AgtkObjectMoveConstant['TargettingLocked'];

/**
 * Agtk object instance object move action command configuration interface.
 */
export interface AgtkObjectMove {
  /**
   * Value 0 - 4.
   *  - 0 = Set Direction and Move
   *  - 1 = Set Coordinates and Move
   *  - 2 = Move to Specified Object - Center
   *  - 3 = Move to Specified Object - Origin
   *  - 4 = Move to Specified Object - Connection Point
   */
  moveType: AgtkMoveType;

  /**
   * Value 0 - 359. Common use references, but not limited too:
   *  - 0 = Up
   *  - 90 = Right
   *  - 180 = Down
   *  - 270 = Left
   */
  angle: number;

  /**
   * Value any integer. Note: If using negative number, the movement will be
   * instant and in opposite direction.
   *  - 0+ = Move distance in pixels
   */
  moveDistance: number;

  /**
   * Value any integer. This moves to this X coordinate. Note: The top-left
   * corner of every scene is (0,0).
   */
  posX: number;

  /**
   * Value any integer. This moves to this Y coordinate. Note: The top-left
   * corner of every scene is (0,0).
   */
  posY: number;

  /**
   * Value true/false. Note: The X, Y will be purely based on the camera view.
   *  - True = Coordinates are Display Area-based
   *  - False = Not display area-based
   */
  moveInDisplayCoordinates: boolean;

  /**
   * Value true/false.
   *  - True = Adjust for camera scrolling
   *  - False = Don't adjust
   */
  followCameraMoving: boolean;

  /**
   * Value -2, -1 or 1+. WARNING: Game will crash if value is 0 or a nonexistent
   * object ID positive number.
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  centerObjectId: number;

  /**
   * Value -1.
   *  - -1 = Single
   */
  centerQualifierId: number;

  /**
   * Value any integer.
   */
  centerAdjustX: number;

  /**
   * Value any integer.
   */
  centerAdjustY: number;

  /**
   * Value -1 or 1+. Note: If outside an existing value, action will be null.
   *  - -1 = Not Set
   *  - 1+ = Any connection points you may have
   */
  connectId: number;

  /**
   * Value true/false.
   *  - True = Use Basic Move Parameter of Target Object (Move Speed %)
   *  - False = Set Duration Until Target Position (Seconds)
   */
  useObjectParameter: boolean;

  /**
   * Value any integer. Represents the speed % to change object to during the
   * move. Note: If using negative number, the movement will be go in the
   * opposite direction specified.
   */
  changeMoveSpeed: number;

  /**
   * Value 0+. This is the time duration for pathing. A value of 300 = 1 second.
   */
  moveDuration300: number;

  /**
   * Value 0-3.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   *  - 2 = Objects Touching This Object (STRONGLY recommend not using script for this option)
   *  - 3 = Objects Locked by This Object
   *
   * @note Developer typo.
   */
  targettingType: AgtkTargetingType;

  /**
   * Value anything. This may be a discontinued property as I couldn't find
   * anything that this changes.
   *
   * @deprecated
   */
  targetObjectType: unknown;

  /**
   * Value -1+ depending on amount of Groups. NOTE: If a value doesn't exist the
   * game won't crash but the action will be null.
   *  - -1 = All Objects
   *  - 0 = Player Group
   *  - 1 = Enemy Group
   *  - 2+ = Any created groups you may have
   */
  targetObjectGroup: number;

  /**
   * Value -3, -2, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  targetObjectId: number;

  /**
   * Value -1.
   *  - -1 = Single
   */
  targetQualifierId: number;

  /**
   * Value true/false.
   *  - True = Player Group is excluded from list
   *  - False = Not excluded
   */
  playerObject: boolean;

  /**
   * Value true/false.
   *  - True = Enemy Group is excluded from list
   *  - False = Not excluded
   */
  enemyObject: boolean;

  /**
   * Value whole numbers. STRONGLY recommend not using script for this option,
   * seems to based off the bit pattern the Groups are stored in.
   */
  objectGroupBit: number;

  /**
   * Value whole numbers. STRONGLY recommend not using script for this option,
   * seems to based off the bit pattern the Groups are stored in.
   *
   * The 1 left shift number of the target group’s index value.
   * Use a logical OR to allow multiple groups.
   * For example, to exclude the player and enemy groups, the code is
   * (1 << Agtk.constants.objectGroup.ObjectGroupPlayer) | (1 << Agtk.constants.objectGroup.ObjectGroupEnemy)
   */
  excludeObjectGroupBit: number;

  /**
   * Value true/false.
   *  - True = Match Display Direction to Move Direction
   *  - False = Don't match display direction
   */
  fitDispDirToMoveDir: boolean;

  /**
   * Value true/false. Note: Opposite of editor.
   *  - True = Don't Hide
   *  - False = Hide Object During Move
   */
  dispWhileMoving: boolean;

  /**
   * Value true/false.
   *  - True = Stop Object Actions During Move
   *  - False = Don't stop actions
   */
  stopActionWhileMoving: boolean;

  /**
   * Value true/false.
   *  - True = Stop Object Animations During Move
   *  - False = Don't stop animations
   */
  stopAnimWhileMoving: boolean;

  /**
   * Value true/false.
   *  - True = Attach Moved Object to Grid
   *  - False = Don't snap to grid
   */
  finalGridMagnet: boolean;
}
