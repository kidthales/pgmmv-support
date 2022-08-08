/**
 * Cocos game namespace interface module.
 *
 * @packageDocumentation
 */

/* eslint-disable @typescript-eslint/ban-types */

/**
 * Cocos game namespace interface.
 */
export interface CCGameNamespace {
  DEBUG_MODE_NONE: 0;
  DEBUG_MODE_INFO: 1;
  DEBUG_MODE_WARN: 2;
  DEBUG_MODE_ERROR: 3;
  DEBUG_MODE_INFO_FOR_WEB_PAGE: 4;
  DEBUG_MODE_WARN_FOR_WEB_PAGE: 5;
  DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6;
  EVENT_HIDE: 'game_on_hide';
  EVENT_SHOW: 'game_on_show';
  EVENT_RESIZE: 'game_on_resize';
  RENDER_TYPE_CANVAS: 0;
  RENDER_TYPE_WEBGL: 1;
  RENDER_TYPE_OPENGL: 2;
  CONFIG_KEY: {
    width: 'width';
    height: 'height';
    engineDir: 'engineDir';
    modules: 'modules';
    debugMode: 'debugMode';
    showFPS: 'showFPS';
    frameRate: 'frameRate';
    id: 'id';
    renderMode: 'renderMode';
    jsList: 'jsList';
  };
  config: object;
  onStart: Function;
  onStop: Function;

  /**
   * Set frameRate of game.
   *
   * @param frameRate
   */
  setFrameRate(frameRate: number): void;

  /**
   * Run the game frame by frame.
   */
  step(): void;

  /**
   * Pause the game.
   */
  pause(): void;

  /**
   * Resume the game from pause.
   */
  resume(): void;

  /**
   * Check whether the game is paused.
   */
  isPaused(): boolean;

  /**
   * Restart game.
   */
  restart(): void;

  /**
   * End game, it will close the game window.
   */
  end(): void;

  /**
   * Prepare game.
   *
   * @param cb
   */
  prepare(cb: Function): void;

  /**
   * Run game with configuration object and onStart function.
   *
   * @param config Pass configuration object or onStart function.
   * @param onStart onStart function to be executed after game initialized.
   */
  run(config?: object | Function, onStart?: Function): void;
}
