/**
 * Cocos system namespace interface module.
 *
 * @packageDocumentation
 */
import type { JsonValue } from 'type-fest';

/**
 * Cocos system namespace interface.
 */
export interface CCSysNamespace {
  localStorage: {
    getItem(key: string): JsonValue;
    removeItem(key: string): void;
    setItem(key: string, value: JsonValue): void;
    clear(): void;
  };
  LANGUAGE_ENGLISH: 'en';
  LANGUAGE_CHINESE: 'zh';
  LANGUAGE_FRENCH: 'fr';
  LANGUAGE_ITALIAN: 'it';
  LANGUAGE_GERMAN: 'de';
  LANGUAGE_SPANISH: 'es';
  LANGUAGE_DUTCH: 'du';
  LANGUAGE_RUSSIAN: 'ru';
  LANGUAGE_KOREAN: 'ko';
  LANGUAGE_JAPANESE: 'ja';
  LANGUAGE_HUNGARIAN: 'hu';
  LANGUAGE_PORTUGUESE: 'pt';
  LANGUAGE_ARABIC: 'ar';
  LANGUAGE_NORWEGIAN: 'no';
  LANGUAGE_POLISH: 'pl';
  LANGUAGE_TURKISH: 'tr';
  LANGUAGE_UKRAINIAN: 'uk';
  LANGUAGE_ROMANIAN: 'ro';
  LANGUAGE_BULGARIAN: 'bg';
  LANGUAGE_UNKNOWN: 'unknown';
  OS_IOS: 'iOS';
  OS_ANDROID: 'Android';
  OS_WINDOWS: 'Windows';
  OS_MARMALADE: 'Marmalade';
  OS_LINUX: 'Linux';
  OS_BADA: 'Bada';
  OS_BLACKBERRY: 'Blackberry';
  OS_OSX: 'OS X';
  OS_WP8: 'WP8';
  OS_WINRT: 'WINRT';
  OS_UNKNOWN: 'Unknown';
  UNKNOWN: -1;
  WIN32: 0;
  LINUX: 1;
  MACOS: 2;
  ANDROID: 3;
  IPHONE: 4;
  IPAD: 5;
  BLACKBERRY: 6;
  NACL: 7;
  EMSCRIPTEN: 8;
  TIZEN: 9;
  WINRT: 10;
  WP8: 11;
  MOBILE_BROWSER: 100;
  DESKTOP_BROWSER: 101;
  BROWSER_TYPE_WECHAT: 'wechat';
  BROWSER_TYPE_ANDROID: 'androidbrowser';
  BROWSER_TYPE_IE: 'ie';
  BROWSER_TYPE_QQ: 'qqbrowser';
  BROWSER_TYPE_MOBILE_QQ: 'mqqbrowser';
  BROWSER_TYPE_UC: 'ucbrowser';
  BROWSER_TYPE_360: '360browser';
  BROWSER_TYPE_BAIDU_APP: 'baiduboxapp';
  BROWSER_TYPE_BAIDU: 'baidubrowser';
  BROWSER_TYPE_MAXTHON: 'maxthon';
  BROWSER_TYPE_OPERA: 'opera';
  BROWSER_TYPE_OUPENG: 'oupeng';
  BROWSER_TYPE_MIUI: 'miuibrowser';
  BROWSER_TYPE_FIREFOX: 'firefox';
  BROWSER_TYPE_SAFARI: 'safari';
  BROWSER_TYPE_CHROME: 'chrome';
  BROWSER_TYPE_LIEBAO: 'liebao';
  BROWSER_TYPE_QZONE: 'qzone';
  BROWSER_TYPE_SOUGOU: 'sogou';
  BROWSER_TYPE_UNKNOWN: 'unknown';
  isNative: boolean;
  platform: number;
  isMobile: boolean;
  language: string;
  os: string;
  browserType: string | number;
  browserVersion: string | number;
  windowPixelResolution: {
    width: number;
    height: number;
  };
  capabilities: {
    canvas: boolean;
    opengl: boolean;
    keyboard: boolean;
    mouse: boolean;
  };

  /**
   * Forces the garbage collection, only available in JSB.
   */
  garbageCollect(): void;

  /**
   * Dumps rooted objects, only available in JSB.
   */
  dumpRoot(): void;

  /**
   * Restart the JS VM, only available in JSB.
   */
  restartVM(): void;

  /**
   * Clean a script in the JS VM, only available in JSB.
   *
   * @param jsFile
   */
  cleanScript(jsFile: string): void;

  /**
   * Check whether an object is valid,
   * In web engine, it will return true if the object exist.
   * In native engine, it will return true if the JS object and the correspond native object are both valid
   *
   * @param obj
   */
  isObjectValid(obj: object): boolean;

  /**
   * Dump system informations.
   */
  dump(): void;

  /**
   *
   * @param url
   */
  openURL(url: string): void;

  /**
   *
   */
  now(): number;
}
