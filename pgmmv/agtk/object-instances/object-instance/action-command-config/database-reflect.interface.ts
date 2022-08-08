/**
 * Agtk object instance database reflect action command configuration interface
 * module.
 *
 * @packageDocumentation
 */
import type { AgtkAssignments } from '../../../constants/assignments';

/**
 * Agtk database reflect reflect variable assignment operator type.
 *
 * @internal
 */
type AgtkReflectVariableAssignmentOperator =
  | AgtkAssignments['VariableAssignOperatorSet']
  | AgtkAssignments['VariableAssignOperatorAdd']
  | AgtkAssignments['VariableAssignOperatorSub']
  | AgtkAssignments['VariableAssignOperatorMul']
  | AgtkAssignments['VariableAssignOperatorDiv']
  | AgtkAssignments['VariableAssignOperatorMod'];

/**
 * Agtk object instance database reflect action command configuration interface.
 */
export interface AgtkDatabaseReflect {
  columnIndex: number;
  columnIndexFromName: boolean;
  columnNumberFromValue: boolean;
  columnVariableId: number;
  columnVariableObjectId: number;
  columnVariableQualifierId: number;
  databaseId: number;
  fromObject: boolean;
  fromRow: boolean;
  objectId: number;
  reflectObjectId: number;
  reflectQualifierId: number;
  reflectVariableAssignOperator: AgtkReflectVariableAssignmentOperator;
  reflectVariableId: number;
  rowIndexFromName: boolean;
  rowNumberFromValue: boolean;
  rowIndex: number;
  rowVariableObjectId: number;
  rowVariableQualifierId: number;
  rowVariableId: number;
}
