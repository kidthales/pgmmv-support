/**
 * Agtk portal A/B interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk portal A/B interface.
 */
export interface AgtkPortalAB {
  /**
   * Scene ID.
   */
  sceneId: number;

  /**
   * X
   */
  x: number;

  /**
   * Y
   */
  y: number;

  /**
   * width
   */
  width: number;

  /**
   * height
   */
  height: number;

  /**
   * Whether it can be moved in other directions.
   */
  movable: boolean;
}
