/**
 * Agtk object instance object action changed link condition configuration
 * interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk object instance object action changed link condition configuration
 * interface.
 */
export interface AgtkObjectActionChanged {
  /**
   * Value -7, -5, -4, -2, -1 or 1+.
   *  - -7 = Parent
   *  - -5 = Locked
   *  - -4 = Child
   *  - -2 = Object Self
   *  - -1 = Not Set
   *  - 1+ = Any created objects you may have
   */
  objectId: number;

  /**
   * Value -1 or 1+.
   *  - -1 = None
   *  - 1+ = Any objects that you have created for a list of actions to pull
   *    from
   */
  actionObjectId: number;

  /**
   * Value -1 or 1+.
   *  - -1 = None
   *  - 1+ = Any actions you may have
   */
  actionId: number;

  /**
   * Value true/false.
   *  - True = When Not Doing Specified Actions
   *  - False = When Doing Specified Actions
   */
  otherActions: boolean;
}
