/**
 * Cocos scene interface module.
 *
 * @packageDocumentation
 */
import type { CCNode } from '../node';

/**
 * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.
 *
 * cc.Scene an cc.Node are almost identical with the difference that cc.Scene
 * has it's anchor point (by default) at the center of the screen.
 *
 * For the moment cc.Scene has no other logic than that, but in future releases
 * it might have additional logic.
 *
 * It is a good practice to use and cc.Scene as the parent of all your nodes.
 *
 * ```
 * var scene = new cc.Scene();
 * ```
 */
export interface CCScene extends CCNode {}
