/**
 * Cocos ease object interface module.
 *
 * @packageDocumentation
 */

/**
 * Action easing object with with internal rate state.
 *
 * @see cc.easeIn
 */
export interface CCEaseObject {
  easing(dt: number): number;
  reverse(): CCEaseObject;
}
