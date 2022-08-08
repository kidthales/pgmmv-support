/**
 * Agtk scene instance interface module.
 *
 * @packageDocumentation
 */
import type { CCNode } from '../../../cc/node';

/**
 * Agtk scene instance interface.
 */
export interface AgtkSceneInstance {
  /**
   * Scene ID.
   */
  sceneId: number;

  /**
   * Retrieves layer corresponding to the specified number.
   *
   * Numbering starts from 0.
   *
   *  Returns cc.Node.
   *
   * @param arg1 Layer index.
   */
  getLayerByIndex(arg1: number): CCNode;

  /**
   * Retrieves menu layer corresponding to specified ID.
   *
   * Returns cc.Node.
   *
   * The foremost menu layer (created implicitly) can be
   * specified in Agtk.constants.systemLayers.HudLayerId.
   *
   * @param arg1 Menu layer ID.
   */
  getMenuLayerById(arg1: number): CCNode;

  /**
   * A cc.Node unaffected by the camera will be returned.
   */
  getHudLayer(): CCNode;

  /**
   * Returns current camera target point.
   */
  getCurrentCameraTargetPos(): { x: number; y: number };

  /**
   * Returns current camera screen enlargement ratio.
   */
  getCurrentCameraDisplayScale(): { x: number; y: number };
}
