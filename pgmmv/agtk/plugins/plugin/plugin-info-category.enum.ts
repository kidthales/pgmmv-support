/**
 * Agtk plugin info category enumeration module.
 *
 * @packageDocumentation
 */

/**
 * Agtk plugin info category enumeration.
 */
export enum AgtkPluginInfoCategory {
  /**
   * Plugin name.
   */
  Name = 'name',

  /**
   * Plugin description.
   */
  Description = 'description',

  /**
   * Plugin author.
   */
  Author = 'author',

  /**
   * Plugin help.
   */
  Help = 'help',

  /**
   * Plugin UI parameters.
   */
  Parameter = 'parameter',

  /**
   * Plugin internal data.
   */
  Internal = 'internal',

  /**
   * Plugin action commands.
   */
  ActionCommand = 'actionCommand',

  /**
   * Plugin link conditions.
   */
  LinkCondition = 'linkCondition',

  /**
   * Plugin auto tiles.
   */
  AutoTile = 'autoTile'
}
