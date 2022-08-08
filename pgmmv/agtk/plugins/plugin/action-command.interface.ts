/**
 * Agtk plugin action command interface module.
 *
 * @packageDocumentation
 */
import type { AgtkParameter } from './parameter';

/**
 * Agtk plugin action command interface.
 */
export interface AgtkActionCommand {
  /**
   * Action command ID.
   */
  id: number;

  /**
   * Action command name.
   */
  name: string;

  /**
   * Action command description.
   */
  description: string;

  /**
   * Action command plugin UI parameters.
   */
  parameter: AgtkParameter[];
}
