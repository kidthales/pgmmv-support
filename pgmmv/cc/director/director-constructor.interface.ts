/**
 * Cocos director constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCDirector } from './director.interface';

/**
 * Cocos director constructor interface.
 *
 * @constructor
 */
export interface CCDirectorConstructor<T extends CCDirector = CCDirector, U extends any[] = never>
  extends CCClassConstructor<T, U> {
  /**
   *
   */
  getInstance(): CCDirector;

  /**
   * The event after draw of cc.Director.
   *
   * ```
   * cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function(event) {
   *   cc.log("after draw event.");
   * });
   * ```
   *
   * @static
   */
  readonly EVENT_AFTER_DRAW: 'director_after_draw';

  /**
   * The event after update of cc.Director.
   *
   * ```
   * cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_UPDATE, function(event) {
   *   cc.log("after update event.");
   * });
   * ```
   *
   * @static
   */
  readonly EVENT_AFTER_UPDATE: 'director_after_update';

  /**
   * The event after visit of cc.Director.
   *
   * ```
   * cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_VISIT, function(event) {
   *   cc.log("after visit event.");
   * });
   * ```
   *
   * @static
   */
  readonly EVENT_AFTER_VISIT: 'director_after_visit';

  /**
   * The event projection changed of cc.Director.
   *
   * ```
   * cc.eventManager.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function(event) {
   *   cc.log("Projection changed.");
   * });
   * ```
   *
   * @static
   */
  readonly EVENT_PROJECTION_CHANGED: 'director_projection_changed';

  /**
   * Constant for 2D projection (orthogonal projection).
   *
   * @static
   */
  readonly PROJECTION_2D: 0;

  /**
   * Constant for 3D projection with a fovy=60, znear=0.5f and zfar=1500.
   *
   * @static
   */
  readonly PROJECTION_3D: 1;

  /**
   * Constant for custom projection, if cc.Director's projection set to it, it
   * calls "updateProjection" on the projection delegate.
   *
   * @static
   */
  readonly PROJECTION_CUSTOM: 3;

  /**
   * Constant for default projection of cc.Director, default projection is 3D
   * projection.
   *
   * @static
   */
  readonly PROJECTION_DEFAULT: CCDirectorConstructor['PROJECTION_2D'];
}
