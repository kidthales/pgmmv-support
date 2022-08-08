/**
 * Agtk image interface module.
 *
 * @packageDocumentation
 */

/**
 * Agtk image interface.
 */
export interface AgtkImage {
  /**
   * Image ID.
   */
  id: number;

  /**
   * Image name.
   */
  name: string;

  /**
   * Image width.
   */
  width: number;

  /**
   * Image height.
   */
  height: number;

  /**
   * Image filename.
   */
  filename: string;
}
