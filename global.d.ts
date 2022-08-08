import type { Agtk, cc, jsb } from './pgmmv';

/**
 * Global namespace.
 */
declare global {
  /**
   * Agtk namespace.
   */
  const Agtk: Agtk;

  /**
   * Cocos namespace.
   */
  const cc: cc;

  /**
   * Cocos JSB namespace.
   */
  const jsb: jsb;
}
