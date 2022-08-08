/**
 * Agtk plugin ID UI parameter interface module.
 *
 * @packageDocumentation
 */
import type { AgtkBaseParameter } from './base-parameter.interface';
import type { AgtkParameterType } from './parameter-type.enum';

/**
 * Agtk plugin ID UI parameter interface.
 */
export interface AgtkIdParameter extends AgtkBaseParameter {
  type:
    | AgtkParameterType.ImageId
    | AgtkParameterType.TextId
    | AgtkParameterType.SceneId
    | AgtkParameterType.TilesetId
    | AgtkParameterType.AnimationId
    | AgtkParameterType.ObjectId
    | AgtkParameterType.FontId
    | AgtkParameterType.MovieId
    | AgtkParameterType.BgmId
    | AgtkParameterType.SeId
    | AgtkParameterType.VoiceId
    | AgtkParameterType.VariableId
    | AgtkParameterType.SwitchId
    | AgtkParameterType.AnimOnlyId
    | AgtkParameterType.PortalId
    | AgtkParameterType.SwitchVariableObjectId
    | AgtkParameterType.DatabaseId;
  defaultValue: number;
  withNewButton?: boolean;
}
