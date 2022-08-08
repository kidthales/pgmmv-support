/**
 * Cocos event manager interface module.
 *
 * @packageDocumentation
 */
import type { CCEvent } from '../event';
import type { CCEventListener } from '../event-listener';
import type { CCNode } from '../node';

/**
 * cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching.
 *
 * The EventListener list is managed in such way so that event listeners can be added and removed
 * while events are being dispatched.
 */
export interface CCEventManager {
  /**
   * Adds a Custom event listener. It will use a fixed priority of 1.
   *
   * @param eventName
   * @param callback
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  addCustomListener(eventName: string, callback: Function): CCEventListener;

  /**
   * Adds a event listener for a specified event.
   * if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.
   * if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.
   *
   * @param listener The listener of a specified event or a object of some event parameters.
   * @param nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener.
   */
  addListener(listener: CCEventListener | Record<string, unknown>, nodeOrPriority: CCNode | number): CCEventListener;

  /**
   * Dispatches a Custom Event with a event name an optional user data.
   *
   * @param eventName
   * @param optionalUserData
   */
  dispatchCustomEvent(eventName: string, optionalUserData?: unknown): void;

  /**
   * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
   *
   * @param event
   */
  dispatchEvent(event: CCEvent): void;

  /**
   * Checks whether dispatching events is enabled.
   */
  isEnabled(): boolean;

  /**
   * Pauses all listeners which are associated the specified target.
   *
   * @param node
   * @param recursive Default false.
   */
  pauseTarget(node: CCNode, recursive?: boolean): void;

  /**
   * Removes all listeners.
   */
  removeAllListeners(): void;

  /**
   * Removes all custom listeners with the same event name.
   *
   * @param customEventName
   */
  removeCustomListeners(customEventName: string): void;

  /**
   * Remove a listener.
   *
   * @param listener An event listener or a registered node target.
   */
  removeListener(listener: CCEventListener): void;

  /**
   * Removes all listeners with the same event listener type or removes all listeners of a node.
   *
   * @param listenerType
   * @param recursive Default false.
   */
  removeListeners(listenerType: number | CCNode, recursive?: boolean): void;

  /**
   * Resumes all listeners which are associated the specified target.
   *
   * @param node
   * @param recursive Default false.
   */
  resumeTarget(node: CCNode, recursive?: boolean): void;

  /**
   * Whether to enable dispatching events.
   *
   * @param enabled
   */
  setEnabled(enabled: boolean): void;

  /**
   * Sets listener's priority with fixed value.
   *
   * @param listener
   * @param fixedPriority
   */
  setPriority(listener: CCEventListener, fixedPriority: number): void;
}
