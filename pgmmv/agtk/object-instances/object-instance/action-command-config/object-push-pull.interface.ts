/**
 * Agtk object instance object push/pull action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectPushPull as AgtkObjectPushPullConstant } from '../../../constants/action-commands/object-push-pull';
import type { AgtkQualifierValue as AgtkTargetQualifierId } from '../../../constants/qualifier';

/**
 * Agtk object push/pull direction type type.
 *
 * @internal
 */
type AgtkDirectionType =
  | AgtkObjectPushPullConstant['DirectionAngle']
  | AgtkObjectPushPullConstant['DirectionObjectDisp'];

/**
 * Agtk object push/pull effect direction type type.
 *
 * @internal
 */
type AgtkEffectDirectionType =
  | AgtkObjectPushPullConstant['EffectDirectionAngle']
  | AgtkObjectPushPullConstant['EffectDirectionObjectDisp']
  | AgtkObjectPushPullConstant['EffectDirectionObjectConnect'];

/**
 * Agtk object push/pull targeting type type.
 */
type AgtkTargetingType =
  | AgtkObjectPushPullConstant['TargettingByType']
  | AgtkObjectPushPullConstant['TargettingByGroup']
  | AgtkObjectPushPullConstant['TargettingById']
  | AgtkObjectPushPullConstant['TargettingTouched']
  | AgtkObjectPushPullConstant['TargettingLocked'];

/**
 * Agtk object instance object push pull action command configuration interface.
 */
export interface AgtkObjectPushPull {
  /**
   * Value true/false.
   *  - True = Set Effect Range Base as Connection Point
   *  - False = Don't use connection point
   */
  effectRangeBaseConnect: boolean;

  /**
   * Value -1 or 1+.
   *  - -1 = Not Set
   *  - 1+ = Any connection points you may have
   */
  effectRangeBaseConnectId: number;

  /**
   * Value 0-1.
   *  - 0 = Range Direction: Set Angle
   *  - 1 = Range Direction: This Object's Display Direction
   */
  directionType: AgtkDirectionType;

  /**
   * Value 0 - 359. Common use references, but not limited too:
   *  - 0 = Up
   *  - 90 = Right
   *  - 180 = Down
   *  - 270 = Left
   */
  angle: number;

  /**
   * Value -1 or 1+. Effect Direction connection point.
   *  - -1 = Not Set
   *  - 1+ = Any connection points you may have
   */
  connectId: number;

  /**
   * Value true/false.
   *  - True = Rectangle
   *  - False = Circle
   */
  rectangle: boolean;

  /**
   * Value 0+.
   */
  rectangleDistance: number;

  /**
   * Value 0+.
   */
  rectangleHeight: number;

  /**
   * Value 0+
   */
  circleDistance: number;

  /**
   * Value 0-360.
   */
  arcAngle: number;

  /**
   * Value 0-2.
   *  - 0 = Effect Direction: Set Angle
   *  - 1 = Effect Direction: This Object's Display Direction
   *  - 2 = Effect Direction: This Object's Connection Point
   */
  effectDirectionType: AgtkEffectDirectionType;

  /**
   * Value 0 - 359. Common use references, but not limited too:
   *  - 0 = Up
   *  - 90 = Right
   *  - 180 = Down
   *  - 270 = Left
   */
  effectDirection: number;

  /**
   * Value integer. Effective Strength +/-.
   */
  effectValue: number;

  /**
   * Value true/false.
   *  - True = Bigger of smaller effect based on distance from this object
   *  - False = Not based on distance
   */
  distanceEffect: boolean;

  /**
   * Value any integer.
   */
  nearValue: number;

  /**
   * Value any integer.
   */
  farValue: number;

  /**
   * Value true/false.
   *  - True = Apply Only Once to Target
   *  - False = Apply continuously
   */
  oneTimeEffect: boolean;

  /**
   * Value 0-3.
   *  - 0 = Set by Object Group
   *  - 1 = Set by Object
   *  - 2 = Objects Touching This Object (STRONGLY recommend not using script
   *    for this option)
   *  - 3 = Objects Locked by This Object
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
   * Value -3, -1 or 1+.
   *  - -3 = Object Other Then Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  targetObjectId: number;

  /**
   * Value -1 or -2.
   *  - -2 = All
   *  - -1 = Single
   */
  targetQualifierId: AgtkTargetQualifierId;

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
   */
  excludeObjectGroupBit: number;
}
