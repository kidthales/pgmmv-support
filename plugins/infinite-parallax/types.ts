/* eslint-disable */
import type { CCLayer, CCLayerConstructor } from '../../pgmmv/cc/layer';
import type { CCPoint } from '../../pgmmv/cc/point';
import type { CCRenderTexture } from '../../pgmmv/cc/render-texture';
import type { CCSprite } from '../../pgmmv/cc/sprite';

/**
 *
 */
export interface InfiniteParallaxLayerConstructor<
  T extends InfiniteParallaxLayer = InfiniteParallaxLayer,
  U extends any[] = never
> extends CCLayerConstructor<T, U> {
  wrapMode: typeof InfiniteParallaxLayerSpriteWrapMode;
}

/**
 *
 */
export interface InfiniteParallaxLayer extends CCLayer {
  /**
   *
   */
  renderTexture: CCRenderTexture;

  /**
   *
   */
  subLayers: InfiniteParallaxSubLayer[];

  /**
   *
   * @param sprite
   * @param localZOrder
   * @param positionOffset
   * @param scaleOffset
   * @param wrapMode
   * @param loop
   * @param getDisplacement
   */
  addSprite(
    sprite: CCSprite,
    localZOrder: number,
    positionOffset: CCPoint,
    scaleOffset: CCPoint,
    wrapMode: InfiniteParallaxLayerSpriteWrapMode,
    loop: CCPoint,
    getDisplacement: InfiniteParallaxLayerSpriteDisplacementCallback
  ): void;

  /**
   *
   * @param dt
   */
  update(dt: number): void;
}

/**
 *
 */
export interface InfiniteParallaxSubLayer {
  /**
   *
   */
  localZOrder: number;

  /**
   *
   */
  wrapMode: InfiniteParallaxLayerSpriteWrapMode;

  /**
   *
   */
  sprite: CCSprite;

  /**
   *
   */
  offset: {
    /**
     *
     */
    position: CCPoint;

    /**
     *
     */
    scale: CCPoint;
  };

  /**
   *
   */
  position: {
    /**
     *
     */
    start: CCPoint;

    /**
     *
     */
    current: CCPoint;
  };

  /**
   *
   */
  loop: {
    /**
     *
     */
    max: CCPoint;

    /**
     *
     */
    current: CCPoint;
  };

  /**
   *
   */
  getDisplacement: InfiniteParallaxLayerSpriteDisplacementCallback;
}

/**
 * - 1 = left to right
 * - 2 = right to left
 * - 3 = horizontal both
 * - 4 = top to bottom
 * - 5 = top left to bottom right
 * - 6 = top right to bottom left
 * - 7 = horizontal both, top to bottom
 * - 8 = bottom to top
 * - 9 = bottom left to top right
 * - 10 = bottom right to top left
 * - 11 = horizontal both, bottom to top
 * - 12 = vertical both
 * - 13 = left to right, vertical both
 * - 14 = right to left, vertical both
 * - 15 = all
 */
//export type InfiniteParallaxLayerSpriteWrapMode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/**
 *
 */
export const enum InfiniteParallaxLayerSpriteWrapMode {
  LeftToRight = 1,
  RightToLeft,
  Horizontal,
  TopToBottom,
  TopLeftToBottomRight,
  TopRightToBottomLeft,
  HorizontalTopToBottom,
  BottomToTop,
  BottomLeftToTopRight,
  BottomRightToTopLeft,
  HorizontalBottomToTop,
  Vertical,
  VerticalLeftToRight,
  VerticalRightToLeft,
  All
}

/**
 *
 */
export type InfiniteParallaxLayerSpriteDisplacementCallback = (p: CCPoint, dt: number) => CCPoint;
