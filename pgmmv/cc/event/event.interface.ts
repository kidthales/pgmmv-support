/**
 * Cocos event interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';
import type { CCNode } from '../node';

/**
 * Base class of all kinds of events.
 */
export interface CCEvent extends CCClass {
  /**
   * Gets current target of the event.
   * Note: It only be available when the event listener is associated with node.
   * It returns 0 when the listener is associated with fixed priority.
   */
  getCurrentTarget(): CCNode;

  /**
   * Gets the event type.
   */
  getType(): number;

  /**
   * Checks whether the event has been stopped.
   */
  isStopped(): boolean;

  /**
   * Stops propagation for current event.
   */
  stopPropagation(): void;
}
