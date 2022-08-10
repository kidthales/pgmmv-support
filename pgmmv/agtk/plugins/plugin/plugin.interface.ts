/**
 * Agtk plugin interface module.
 *
 * @packageDocumentation
 */
import type { JsonValue } from 'type-fest';

import type { AgtkCommandBehaviorValue as AgtkCommandBehavior } from '../../constants/action-commands/command-behavior';

import type { AgtkActionCommand } from './action-command.interface';
import type { AgtkAutoTileParameters } from './auto-tile-parameters.interface';
import type { AgtkLinkCondition } from './link-condition.interface';
import type { AgtkParameterValue } from './parameter-value.interface';
import type { AgtkParameter } from './parameter';
import type { AgtkPluginInfoCategory } from './plugin-info-category.enum';

/**
 * Agtk plugin interface.
 */
export interface AgtkPlugin<I extends JsonValue = JsonValue> {
  /**
   * Set by PGMMV engine when plugin is first initialized.
   */
  readonly id: number;

  /**
   * Sets the locale in which to run the plug-in.
   *
   * @param locale
   * @note Called from the system. Required for setting to locale="en".
   */
  setLocale: (locale: string) => void;

  /**
   * Retrieve plug-in information.
   *
   * @param category One of the following:
   *  - name: Plug-in name.
   *  - description: Plug-in description.
   *  - author: Creator name.
   *  - help: Plug-in help.
   *  - parameter: JavaScript object of plug-in parameter.
   *  - internal: Data that displays plugin status.
   *  - actionCommand: Defines unique action command.
   *  - linkCondition: Defines unique link condition.
   *  - autoTile: Defines auto-tile parameters.
   * @returns Category information.
   */
  getInfo: <C extends AgtkPluginInfoCategory>(
    category: C
  ) => C extends AgtkPluginInfoCategory.Parameter
    ? AgtkParameter[]
    : C extends AgtkPluginInfoCategory.Internal
    ? I
    : C extends AgtkPluginInfoCategory.ActionCommand
    ? AgtkActionCommand[]
    : C extends AgtkPluginInfoCategory.LinkCondition
    ? AgtkLinkCondition[]
    : C extends AgtkPluginInfoCategory.AutoTile
    ? AgtkAutoTileParameters
    : string;

  /**
   * Initializes plug-in.
   *
   * @param data Data returned with `getInfo('internal')`.
   * @note Called from the system. Initially passes undefined. In the player,
   * the data returned by `getInfo('internal')` will be passed when the project
   * is saved in the editor.
   */
  initialize: (data?: I) => void;

  /**
   * Finalizes plug-in.
   *
   * @note Called from the system. Processes plug-in finalization. No need to do
   * anything if it's not needed. Internal plug-in status is fetched with
   * `getInfo('internal')` and passed as a call parameter on the next
   * initialize. Internal plug-in status is recorded independently by both the
   * editor and player.
   */
  finalize: () => void;

  /**
   * Calls various functions.
   *
   * @todo
   */
  call: (...args: unknown[]) => unknown;

  /**
   * Calls update process.
   *
   * @param delta
   * @note Called from the system. Called with each frame. The time elapsed from
   * the previous frame is contained in <delta time>.
   */
  update?: (delta: number) => void;

  /**
   * Sets data configured in plug-in parameters.
   *
   * @param paramValue Object that parsed the JSON in parameter settings.
   * @note Called from the system. Called whenever parameters are updated on the
   * editor's plug-in settings screen.
   */
  setParamValue: (paramValue: AgtkParameterValue[]) => void;

  /**
   * Sets internal data
   *
   * @param data Data fetched using getInfo('internal') when play data is saved.
   * @note Called from the system. Called when play data is loaded.
   */
  setInternal: (data: I) => void;

  /**
   * Executes actions command.
   *
   * @param actionCommandIndex
   * @param parameter
   * @param objectId
   * @param instanceId
   * @param actionId
   * @param commandId
   * @param commonActionStatus
   * @param sceneId
   * @return Command return value.
   * @notes Called from the system. When multiple action commands are defined by
   * the plug-in, they are differentiated by <Action command index>. Parameters
   * set by action commands are passed as objects using <Settings parameter>.
   */
  execActionCommand?: (
    actionCommandIndex: number,
    parameter: AgtkParameterValue[],
    objectId: number,
    instanceId: number,
    actionId: number,
    commandId: number,
    commonActionStatus: 0 | 1,
    sceneId: number
  ) => AgtkCommandBehavior | undefined;

  /**
   * Evaluates link condition.
   *
   * @param linkConditionIndex
   * @param parameter
   * @param objectId
   * @param instanceId
   * @param actionLinkId
   * @param commonActionStatus
   * @returns Boolean indicating whether link was established.
   * @notes Called from the system. Called during evaluation of link conditions.
   * If multiple link conditions are defined by a plug-in, they are
   * differentiated by <Link index>. Parameters set by link conditions are
   * passed as objects using <Settings parameter>.
   */
  execLinkCondition?: (
    linkConditionIndex: number,
    parameter: AgtkParameterValue[],
    objectId: number,
    instanceId: number,
    actionLinkId: number,
    commonActionStatus: -1 | 0 | 1
  ) => boolean;

  /**
   * Returns attribute of specified tile coordinates.
   *
   * @todo
   * @note Used for switching tiles used in this auto-tile using the attribute
   * set by other auto-tile plug-ins.
   */
  getAttribute?: (...args: unknown[]) => unknown;

  /**
   * Returns border information for specified tile coordinates.
   *
   * @todo
   * @note Used for switching tiles used in this auto-tile using the border
   * information set by other auto-tile plug-ins.
   */
  getBorderType?: (...args: unknown[]) => unknown;
}
