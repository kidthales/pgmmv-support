/**
 * Cocos layer interface module.
 *
 * @packageDocumentation
 */
import type { CCNode } from '../node';

/**
 * cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate
 * protocol. All features from cc.Node are valid, plus the bake feature: Baked
 * layer can cache a static layer to improve performance.
 */
export interface CCLayer extends CCNode {
  /**
   * Sets the layer to cache all of children to a bake sprite, and draw itself
   * by bake sprite. recommend using it in UI. This is useful only in html5
   * engine.
   */
  bake(): void;

  /**
   * Constructor of cc.Layer, override it to extend the construction behavior,
   * remember to call "this._super()" in the extended "ctor" function.
   */
  ctor(): void;

  /**
   * Initialization of the layer, please do not call this function by yourself,
   * you should pass the parameters to constructor to initialize a layer.
   */
  init(): boolean;

  /**
   * Determines if the layer is baked.
   */
  isBaked(): boolean;

  /**
   * Cancel the layer to cache all of children to a bake sprite.
   * This is useful only in html5 engine.
   */
  unbake(): void;
}
