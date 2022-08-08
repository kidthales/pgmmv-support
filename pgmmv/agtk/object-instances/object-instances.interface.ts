/**
 * Agtk object instances interface module.
 *
 * @packageDocumentation
 */
import type { AgtkObjectInstance } from './object-instance';

/**
 * Agtk object instances interface.
 */
export interface AgtkObjectInstances {
  /**
   * Get object instance.
   *
   * @param id - The object instance ID.
   * @returns The object instance
   */
  get(id: number): AgtkObjectInstance;

  /**
   * Get object instance ID by name.
   *
   * @param objectId - The object instance's object ID.
   * @param instanceName - The object instance's name (as set in the editor).
   * @returns An object instance ID when found, -1 otherwise.
   * @note Checks for consistency with object name if object instance is
   * dynamically generated.
   */
  getIdByName(objectId: number, instanceName: string): number;
}
