/**
 * Agtk common switches interface module.
 *
 * @packageDocumentation
 */
import type { AgtkSwitch } from './switch';

/**
 * Agtk common variables interface module.
 */
export interface AgtkSwitches {
  /**
   * Init ID.
   */
  readonly InitId: 1;

  /**
   * Reset ID.
   */
  readonly ResetId: 2;

  /**
   * Save file ID.
   */
  readonly SaveFileId: 6;

  /**
   * Load file ID.
   */
  readonly LoadFileId: 7;

  /**
   * Copy file ID.
   */
  readonly CopyFileId: 8;

  /**
   * Delete file ID.
   */
  readonly DeleteFileId: 9;

  /**
   * Initial camera ID.
   */
  readonly InitialCameraId: 10;

  /**
   * Loading scene ID.
   */
  readonly LoadingSceneId: 11;

  /**
   * Quit the game ID.
   */
  readonly QuitTheGameId: 12;

  /**
   * File exists ID.
   */
  readonly FileExistsId: 13;

  /**
   * Get common switch.
   *
   * @param id - The switch ID.
   * @returns The switch.
   */
  get(id: number): AgtkSwitch;

  /**
   * Get common switch ID by name.
   *
   * @param name - The switch name.
   * @returns A switch ID when found, -1 otherwise.
   * @note Preset variable may change according to language, so avoid using this
   * method if possible.
   */
  getIdByName(name: string): number;
}
