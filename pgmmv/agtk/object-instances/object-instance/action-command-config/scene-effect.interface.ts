/**
 * Agtk object instance scene effect action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkFilterEffects } from '../../../constants/filter-effects';

import type { AgtkObjectFilterEffect } from './object-filter-effect.interface';

/**
 * Agtk scene effect filter effect image placement.
 */
type AgtkImagePlacement =
  | AgtkFilterEffects['PlacementCenter']
  | AgtkFilterEffects['PlacementMagnify']
  | AgtkFilterEffects['PlacementTiling']
  | AgtkFilterEffects['PlacementKeepRatio']
  | AgtkFilterEffects['PlacementObjectCenter'];

/**
 * Agtk object instance scene effect action command configuration interface.
 */
export interface AgtkSceneEffect {
  /**
   * Value -4, -3, -1, 0+.
   *  - -4 = Foremost Layer + Menu
   *  - -3 = Foremost Layer
   *  - -1 = All Layers in Scene
   *  - 0+ = Any individual available layer
   */
  layerIndex: number;

  /**
   * Filter effect.
   */
  filterEffect: AgtkObjectFilterEffect & {
    /**
     * Value 0 - 4.
     *  - 0 = Center
     *  - 1 = Enlarge
     *  - 2 = Tiles
     *  - 3 = Keep Aspect Ratio and Enlarge
     *  - 4 = Center of This Object
     */
    imagePlacement: AgtkImagePlacement;
  };
}
