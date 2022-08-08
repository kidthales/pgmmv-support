/**
 * Common variables interface module.
 *
 * @packageDocumentation
 */
import type { AgtkVariable } from './variable';

/**
 * Common variables interface module.
 */
export interface AgtkVariables {
  /**
   * Player count ID.
   */
  readonly PlayerCountId: 6;

  /**
   * Player 1 object ID.
   */
  readonly _1PObjectId: 7;

  /**
   * Player 2 object ID.
   */
  readonly _2PObjectId: 8;

  /**
   * Player 3 object ID.
   */
  readonly _3PObjectId: 9;

  /**
   * Player 4 object ID.
   */
  readonly _4PObjectId: 10;

  /**
   * Player 1 object instance ID.
   */
  readonly _1PInstanceId: 14;

  /**
   * Player 2 object instance ID.
   */
  readonly _2PInstanceId: 15;

  /**
   * Player 3 object instance ID.
   */
  readonly _3PInstanceId: 16;

  /**
   * Player 4 object instance ID.
   */
  readonly _4PInstanceId: 17;

  /**
   * Player 1 controller ID.
   */
  readonly _1PControllerId: 18;

  /**
   * Player 2 controller ID.
   */
  readonly _2PControllerId: 19;

  /**
   * Player 3 controller ID.
   */
  readonly _3PControllerId: 20;

  /**
   * Player 4 controller ID.
   */
  readonly _4PControllerId: 21;

  /**
   * Portal move start time ID.
   */
  readonly PortalMoveStartTimeId: 11;

  /**
   * File slot ID.
   */
  readonly FileSlotId: 12;

  /**
   * Copy destination file slot ID.
   */
  readonly CopyDestinationFileSlotId: 13;

  /**
   * Mouse x ID.
   */
  readonly MouseXId: 22;

  /**
   * Mouse y ID.
   */
  readonly MouseYId: 23;

  /**
   * Background music volume.
   */
  readonly BgmVolume: 24;

  /**
   * Sounds effect volume.
   */
  readonly SeVolume: 25;

  /**
   * Voice volume.
   */
  readonly VoiceVolume: 26;

  /**
   * Get common variable.
   *
   * @param id - The variable ID.
   * @returns The variable.
   */
  get(id: number): AgtkVariable;

  /**
   * Get common variable ID by name.
   *
   * @param name - The variable name.
   * @returns A variable ID when found, -1 otherwise.
   * @note Preset variable may change according to language, so avoid using this
   * method if possible.
   */
  getIdByName(name: string): number;
}
