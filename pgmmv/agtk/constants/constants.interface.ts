/**
 * Agtk constants interface module.
 *
 * @packageDocumentation
 */
import type { AgtkActionCommands } from './action-commands';
import type { AgtkAnimations } from './animations';
import type { AgtkAssignments } from './assignments';
import type { AgtkAttackAttributes } from './attack-attributes';
import type { AgtkConditions } from './conditions';
import type { AgtkControllers } from './controllers';
import type { AgtkDatabaseTemplateTypes } from './database-template-types';
import type { AgtkDirection } from './direction';
import type { AgtkFilterEffects } from './filter-effects';
import type { AgtkLinkCondition } from './link-condition';
import type { AgtkObjectGroup } from './object-group';
import type { AgtkObjectType } from './object-type';
import type { AgtkObjects } from './objects';
import type { AgtkQualifier } from './qualifier';
import type { AgtkSwitchVariableObjects } from './switch-variable-objects';
import type { AgtkSystemLayers } from './system-layers';
import type { AgtkTileGroup } from './tile-group';
import type { AgtkTile } from './tile';
import type { AgtkTracks } from './tracks';

/**
 * Agtk constants interface.
 */
export interface AgtkConstants {
  /**
   * Action commands.
   */
  readonly actionCommands: AgtkActionCommands;

  /**
   * Link condition.
   */
  readonly linkCondition: AgtkLinkCondition;

  /**
   * Conditions.
   */
  readonly conditions: AgtkConditions;

  /**
   * Assignments.
   */
  readonly assignments: AgtkAssignments;

  /**
   * Attack attributes.
   */
  readonly attackAttributes: AgtkAttackAttributes;

  /**
   * Filter effects.
   */
  readonly filterEffects: AgtkFilterEffects;

  /**
   * System layers.
   */
  readonly systemLayers: AgtkSystemLayers;

  /**
   * Qualifier.
   */
  readonly qualifier: AgtkQualifier;

  /**
   * Object type.
   *
   * @deprecated
   */
  readonly objectType: AgtkObjectType;

  /**
   * Object group.
   */
  readonly objectGroup: AgtkObjectGroup;

  /**
   * Tile group.
   */
  readonly tileGroup: AgtkTileGroup;

  /**
   * Tile.
   */
  readonly tile: AgtkTile;

  /**
   * Direction.
   */
  readonly direction: AgtkDirection;

  /**
   * Controllers.
   */
  readonly controllers: AgtkControllers;

  /**
   * Animations.
   */
  readonly animations: AgtkAnimations;

  /**
   * Tracks.
   */
  readonly tracks: AgtkTracks;

  /**
   * Objects.
   */
  readonly objects: AgtkObjects;

  /**
   * Switch variable objects.
   */
  readonly switchVariableObjects: AgtkSwitchVariableObjects;

  /**
   * Database template types.
   */
  readonly databaseTemplateTypes: AgtkDatabaseTemplateTypes;
}
