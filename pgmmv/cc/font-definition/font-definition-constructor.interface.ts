/**
 * Cocos font definition constructor interface module.
 *
 * @packageDocumentation
 */
import type { Constructor } from '../../_shared';

import type { CCFontDefinitionProperties } from './font-definition-properties.type';
import type { CCFontDefinition } from './font-definition.interface';

/**
 * Cocos font definition constructor interface.
 *
 * @param properties
 * @constructor
 */
export interface CCFontDefinitionConstructor<
  T extends CCFontDefinition = CCFontDefinition,
  U extends any[] = [CCFontDefinitionProperties?]
> extends Constructor<T, U> {}
