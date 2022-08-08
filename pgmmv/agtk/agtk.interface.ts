/**
 * Agtk interface module.
 *
 * @packageDocumentation
 */
import type { AgtkActionCommands } from './action-commands';
import type { AgtkAnimations } from './animations';
import type { AgtkBGMS } from './bgms';
import type { AgtkConstants } from './constants';
import type { AgtkControllers } from './controllers';
import type { AgtkDatabases } from './databases';
import type { AgtkFonts } from './fonts';
import type { AgtkImages } from './images';
import type { AgtkLayers } from './layers';
import type { AgtkMovies } from './movies';
import type { AgtkObjectInstances } from './object-instances';
import type { AgtkObjects } from './objects';
import type { AgtkPlayerCharacters } from './player-characters';
import type { AgtkPlugins } from './plugins';
import type { AgtkPortals } from './portals';
import type { AgtkSceneInstances } from './scene-instances';
import type { AgtkScenes } from './scenes';
import type { AgtkSES } from './ses';
import type { AgtkSettings } from './settings';
import type { AgtkSwitches } from './switches';
import type { AgtkTexts } from './texts';
import type { AgtkTilesets } from './tilesets';
import type { AgtkUi } from './ui';
import type { AgtkVariables } from './variables';
import type { AgtkVoices } from './voices';

/**
 * Agtk interface.
 */
export interface Agtk {
  /**
   * Text string that displays execution engine version.
   *
   * ```
   * Notes:
   * PGMMV <Version Number>
   * player <Version Number>
   * runtime <Version Number>
   * ```
   */
  readonly version: string;

  /**
   * Outputs log.
   *
   * In the player, it is output in the "Runtime Log Console".
   *
   * @param message - Output string.
   */
  log(message: string): void;

  /**
   * Resets the game. Performs same operation as resetting with F5 key.
   */
  reset(): void;

  /**
   * Settings.
   */
  readonly settings: AgtkSettings;

  /**
   * Player characters.
   */
  readonly playerCharacters: AgtkPlayerCharacters;

  /**
   * Scenes.
   */
  readonly scenes: AgtkScenes;

  /**
   * Layers.
   */
  readonly layers: AgtkLayers;

  /**
   * UI.
   */
  readonly ui: AgtkUi;

  /**
   * Scene instances.
   */
  readonly sceneInstances: AgtkSceneInstances;

  /**
   * Plugins.
   */
  readonly plugins: AgtkPlugins;

  /**
   * Objects.
   */
  readonly objects: AgtkObjects;

  /**
   * Animations.
   */
  readonly animations: AgtkAnimations;

  /**
   * Images.
   */
  readonly images: AgtkImages;

  /**
   * Tilesets.
   */
  readonly tilesets: AgtkTilesets;

  /**
   * Common switches.
   */
  readonly switches: AgtkSwitches;

  /**
   * Common variables.
   */
  readonly variables: AgtkVariables;

  /**
   * Action commands.
   */
  readonly actionCommands: AgtkActionCommands;

  /**
   * Portals.
   */
  readonly portals: AgtkPortals;

  /**
   * Controllers.
   */
  readonly controllers: AgtkControllers;

  /**
   * Object instances.
   */
  readonly objectInstances: AgtkObjectInstances;

  /**
   * Fonts.
   */
  readonly fonts: AgtkFonts;

  /**
   * Texts.
   */
  readonly texts: AgtkTexts;

  /**
   * Movies.
   */
  readonly movies: AgtkMovies;

  /**
   * Background music.
   */
  readonly bgms: AgtkBGMS;

  /**
   * Sound effects.
   */
  readonly ses: AgtkSES;

  /**
   * Voices.
   */
  readonly voices: AgtkVoices;

  /**
   * Databases.
   */
  readonly databases: AgtkDatabases;

  /**
   * Constants.
   */
  readonly constants: AgtkConstants;
}
