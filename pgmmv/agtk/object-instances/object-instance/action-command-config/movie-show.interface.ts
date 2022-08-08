/**
 * Agtk object instance movie show action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkMovieShow as AgtkMovieShowConstant } from '../../../constants/action-commands/movie-show';
import type { AgtkPriorityTypeValue as AgtkPriorityType } from '../../../constants/action-commands/priority-type';

/**
 * Agtk movie show position type type.
 *
 * @internal
 */
type AgtkPositionType =
  | AgtkMovieShowConstant['PositionCenter']
  | AgtkMovieShowConstant['PositionLockObjectCenter']
  | AgtkMovieShowConstant['PositionScenePosition'];

/**
 * Agtk movie show vertical alignment type.
 *
 * @internal
 */
type AgtkVerticalAlignment =
  | AgtkMovieShowConstant['VertAlignCenter']
  | AgtkMovieShowConstant['VertAlignTop']
  | AgtkMovieShowConstant['VertAlignBottom'];

/**
 * Agtk movie show horizontal alignment type.
 *
 * @internal
 */
type AgtkHorizontalAlignment =
  | AgtkMovieShowConstant['HorzAlignCenter']
  | AgtkMovieShowConstant['HorzAlignLeft']
  | AgtkMovieShowConstant['HorzAlignRight'];

/**
 * Agtk object instance movie show action command configuration interface.
 */
export interface AgtkMovieShow {
  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any video ID's you may have
   */
  movieId: number;

  /**
   * Value true/false.
   *  - True = Loop
   *  - False = No loop
   */
  loop: boolean;

  /**
   * Value 0 - 100.
   */
  volume: number;

  /**
   * Value true/false.
   *  - True = Default video size
   *  - False = Adjusted video size
   */
  defaultSize: boolean;

  /**
   * Value 0+.
   */
  width: number;

  /**
   * Value 0+.
   */
  height: number;

  /**
   * Value 0 - 2.
   *  - 0 = Center of This Object
   *  - 1 = Center of Object Locked by This Object
   *  - 2 = Use Scene as Base
   */
  positionType: AgtkPositionType;

  /**
   * Value true/false.
   *  - True = Use Connection Point
   *  - False = Don't Use
   */
  useConnect: boolean;

  /**
   * Value -1, 1+.
   *  - -1 = Not Set
   *  - 1+ = Any Connection Points you may have added
   */
  connectId: number;

  /**
   * Value 0 - 2.
   *  - 0 = Center
   *  - 1 = Top
   *  - 2 = Bottom
   */
  vertAlign: AgtkVerticalAlignment;

  /**
   * Value 0 - 2.
   *  - 0 = Center
   *  - 1 = Left
   *  - 2 = Right
   */
  horzAlign: AgtkHorizontalAlignment;

  /**
   * Value any integer.
   */
  adjustX: number;

  /**
   * Value any integer.
   */
  adjustY: number;

  /**
   * Value true/false.
   *  - True = Hide on Object Action Change
   *  - False = Don't hide on action change
   */
  hideOnObjectActionChange: boolean;

  /**
   * Value true/false.
   *  - True = Stop All Object Motions During Video Playback
   *  - False = Don't stop motions
   */
  stopObject: boolean;

  /**
   * Value true/false.
   *  - True = Pause Game During Video Playback
   *  - False = Don't pause game
   */
  stopGame: boolean;

  /**
   * Value true/false.
   *  - True = Dim Areas Outside Video
   *  - False = Don't dim
   */
  fillBlack: boolean;

  /**
   * Value true/false.
   *  - True = Position
   *  - False = Don't adjust position
   */
  priority: boolean;

  /**
   * Value true/false.
   *  - True = Frontmost
   *  - False = Not frontmost (note only priorityType value of 0 will be false)
   *
   * @deprecated To be removed.
   */
  priorityMostFront: boolean;

  /**
   * Value 0 - 2.
   *  - 0 = Background
   *  - 1 = Frontmost
   *  - 2 = Frontmost + Menu Scene
   */
  priorityType: AgtkPriorityType;
}
