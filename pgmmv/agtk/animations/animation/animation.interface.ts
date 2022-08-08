/**
 * Agtk animation interface module.
 *
 * @packageDocumentation
 */
import type { AgtkAnimationsValue as AgtkAnimationType } from '../../constants/animations';

import type { AgtkMotions } from './motions';

/**
 * Agtk animation interface.
 */
export interface AgtkAnimation {
  /**
   *
   */
  id: number;

  /**
   *
   */
  name: string;

  /**
   * Animation type.
   *
   * Agtk.constants.animations.Motion/Agtk.constants.animations.Effect/Agtk.constants.animations.Particle
   */
  type: AgtkAnimationType;

  /**
   * Motion data.
   *
   * Undefined when type != Agtk.constants.animations.Motion
   */
  motions: AgtkMotions;

  /**
   * Resource set name array.
   */
  getResourceSetIdList(): number[];

  /**
   * Resource set name array.
   *
   * *Each element is compatible with the respective getResourceSetIdList() array.
   */
  getResourceSetNameList(): string[];
}
