/**
 * Cocos draw node interface module.
 *
 * @packageDocumentation
 */
import type { CCBlendFunc } from '../blend-func';
import type { CCColor } from '../color';
import type { CCNode } from '../node';
import type { CCPoint } from '../point';

/**
 * Node that draws dots, segments and polygons.
 * Faster than the "drawing primitives" since it draws everything in one single batch.
 */
export interface CCDrawNode extends CCNode {
  /**
   * Clear the geometry in the node's buffer.
   */
  clear(): void;

  /**
   * Draw a cardinal spline path.
   *
   * @param config
   * @param tension
   * @param segments
   * @param lineWidth
   * @param color
   */
  drawCardinalSpline(config: CCPoint[], tension: number, segments: number, lineWidth?: number, color?: CCColor): void;

  /**
   * Draw a CatmullRom curve.
   *
   * @param points
   * @param segments
   * @param lineWidth
   * @param color
   */
  drawCatmullRom(points: CCPoint[], segments: number, lineWidth?: number, color?: CCColor): void;

  /**
   * Draws a circle given the center, radius and number of segments.
   *
   * @param center Center of circle.
   * @param radius
   * @param angle Angle in radians.
   * @param segments
   * @param drawLineToCenter
   * @param lineWidth
   * @param color
   */
  drawCircle(
    center: CCPoint,
    radius: number,
    angle: number,
    segments: number,
    drawLineToCenter: boolean,
    lineWidth?: number,
    color?: CCColor
  ): void;

  /**
   * Draws a cubic bezier path.
   *
   * @param origin
   * @param control1
   * @param control2
   * @param destination
   * @param segments
   * @param lineWidth
   * @param color
   */
  drawCubicBezier(
    origin: CCPoint,
    control1: CCPoint,
    control2: CCPoint,
    destination: CCPoint,
    segments: number,
    lineWidth?: number,
    color?: CCColor
  ): void;

  /**
   * Draw a dot at a position, with a given radius and color.
   *
   * @param pos
   * @param radius
   * @param color
   */
  drawDot(pos: CCPoint, radius: number, color?: CCColor): void;

  /**
   * Draws an array of points.
   *
   * @param points Points array.
   * @param radius
   * @param color
   */
  drawDots(points: CCPoint[], radius: number, color?: CCColor): void;

  /**
   * Draw a polygon with a fill color and line color, copying the vertex list.
   *
   * @param verts
   * @param fillColor Fill color or `null` for a hollow polygon.
   * @param lineWidth
   * @param lineColor
   */
  drawPoly(verts: CCPoint[], fillColor: CCColor | null, lineWidth?: number, lineColor?: CCColor): void;

  /**
   * Draw a polygon with a fill color and line color without copying the vertex list.
   *
   * @param verts
   * @param fillColor Fill color or `null` for a hollow polygon.
   * @param lineWidth
   * @param lineColor
   */
  drawPoly_(verts: CCPoint[], fillColor: CCColor | null, lineWidth?: number, lineColor?: CCColor): void;

  /**
   * Draws a quad bezier path.
   *
   * @param origin
   * @param control
   * @param destination
   * @param segments
   * @param lineWidth
   * @param color
   */
  drawQuadBezier(
    origin: CCPoint,
    control: CCPoint,
    destination: CCPoint,
    segments: number,
    lineWidth?: number,
    color?: CCColor
  ): void;

  /**
   * Draws a rectangle given the origin and destination point measured in points.
   *
   * @param origin
   * @param destination
   * @param fillColor
   * @param lineWidth
   * @param lineColor
   */
  drawRect(
    origin: CCPoint,
    destination: CCPoint,
    fillColor: CCColor | null,
    lineWidth?: number,
    lineColor?: CCColor
  ): void;

  /**
   * Draw a segment with a radius and color.
   *
   * @param from
   * @param to
   * @param lineWidth
   * @param color
   */
  drawSegment(from: CCPoint, to: CCPoint, lineWidth?: number, color?: CCColor): void;

  /**
   * Gets the blend func.
   */
  getBlendFunc(): CCBlendFunc;

  /**
   * Draw color getter.
   */
  getDrawColor(): CCColor;

  /**
   * Line width getter.
   */
  getLineWidth(): number;

  /**
   * Set the blend func.
   *
   * @param blendFunc
   * @param dst
   */
  setBlendFunc(blendFunc: CCBlendFunc, dst: number): void;

  /**
   * Draw color setter.
   *
   * @param color
   */
  setDrawColor(color: CCColor): void;

  /**
   * Line width setter.
   *
   * @param width
   */
  setLineWidth(width: number): void;
}
