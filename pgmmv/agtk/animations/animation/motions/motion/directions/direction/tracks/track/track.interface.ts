/**
 * Agtk animation motion direction track interface module.
 *
 * @packageDocumentation
 */
import type { AgtkTracksValue as AgtkTimelineType } from '../../../../../../../../constants/tracks';

/**
 * Agtk animation motion direction track interface.
 */
export interface AgtkTrack {
  /**
   * Track ID.
   */
  id: number;

  /**
   * Track name.
   */
  name: string;

  /**
   * Track type
   *
   * Agtk.constants.tracks.TimelineWall/TimelineHit/TimelineAttack/TimelineConnect
   */
  timelineType: AgtkTimelineType;
}
