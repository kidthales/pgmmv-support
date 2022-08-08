/**
 * Agtk plugins interface module.
 *
 * @packageDocumentation
 */
import type { JsonValue } from 'type-fest';

import type { AgtkPlugin } from './plugin';

/**
 * Calls in the format of Agtk.plugins[<Index>] and returns
 * the plug-in object of the specified <Index>.
 *
 * Refer to "Script Plug-in IF" sheet
 * for details about plug-in objects.
 *
 * see <player-directory>/Resources/plugins/prepare.js
 */
export interface AgtkPlugins extends Exclude<Array<AgtkPlugin>, keyof Array<AgtkPlugin>> {
  /**
   * Returns number of loaded plugins.
   */
  length: number;

  /**
   * Checks whether a plug-in object has basic functions
   * implemented.
   *
   * Presumably only used by the system.
   *
   * @param arg1 Plugin object.
   * @param arg2 Plugin ID.
   * @param arg3 Locale.
   */
  isValid(arg1: AgtkPlugin, arg2: number, arg3: string): boolean;

  /**
   * Destroys loaded plug-in and resets it. Plug-in status will
   * be restored using <Internal data>.
   *
   * Presumably only used by the system.
   *
   * @param arg1 Plugin object.
   * @param arg2 Plugin ID.
   * @param arg3 Locale.
   * @param arg4 Internal data.
   */
  reload(arg1: AgtkPlugin, arg2: number, arg3: string, arg4: JsonValue): void;

  /**
   * Unloads plugin.
   *
   * Presumably only used by the system.
   *
   * @param arg Plugin ID.
   */
  unload(arg: number): void;

  /**
   * Returns plugin index.
   *
   * @param arg Plugin ID.
   */
  getIndexById(arg: number): number;

  /**
   * Returns plugin object.
   *
   * @param arg Plugin ID.
   */
  getById(arg: number): AgtkPlugin;
}
