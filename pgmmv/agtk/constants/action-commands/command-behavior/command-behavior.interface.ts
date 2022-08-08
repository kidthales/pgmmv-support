/**
 * Agtk action commands command behavior constants interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk action commands command behavior constants interface.
 */
export interface AgtkCommandBehavior {
  /**
   * Command behavior next.
   */
  readonly CommandBehaviorNext: 0;

  /**
   * Command behavior loop.
   */
  readonly CommandBehaviorLoop: 1;

  /**
   * Command behavior block.
   */
  readonly CommandBehaviorBlock: 2;

  /**
   * Command behavior break;
   */
  readonly CommandBehaviorBreak: 3;
}
