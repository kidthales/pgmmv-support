/**
 * Cocos scheduler constructor interface module.
 *
 * @packageDocumentation
 */
import type { CCClassConstructor } from '../class';

import type { CCScheduler } from './scheduler.interface';

/**
 * Cocos scheduler constructor interface.
 */
export interface CCSchedulerConstructor<T extends CCScheduler = CCScheduler, U extends any[] = never>
  extends CCClassConstructor<T, U> {
  /**
   * Priority level reserved for system services.
   */
  readonly PRIORITY_SYSTEM: -2147483648;
}
