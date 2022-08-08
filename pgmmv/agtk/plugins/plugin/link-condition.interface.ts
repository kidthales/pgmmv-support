/**
 * Agtk plugin link condition interface module.
 *
 * @packageDocumentation
 */
import type { AgtkParameter } from './parameter';

/**
 * Agtk plugin link condition interface.
 */
export interface AgtkLinkCondition {
  /**
   * Link condition ID.
   */
  id: number;

  /**
   * Link condition name.
   */
  name: string;

  /**
   * Link condition description.
   */
  description: string;

  /**
   * Link condition plugin UI parameters.
   */
  parameter: AgtkParameter[];
}
