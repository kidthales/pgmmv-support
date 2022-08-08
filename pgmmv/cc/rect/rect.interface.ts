/**
 * Cocos rectangle interface module.
 *
 * @packageDocumentation
 */

/**
 * cc.Rect is the class for rect object.
 * Please do not use its constructor to create rects, use cc.rect() alias function instead.
 */
export interface CCRect {
  height: number;
  width: number;
  x: number;
  y: number;
}
