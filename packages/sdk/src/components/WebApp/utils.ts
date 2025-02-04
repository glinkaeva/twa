import {Platform} from './types';

/**
 * Returns true in case, passed platform name describes desktop version of
 * Telegram.
 * @param platform - platform name.
 */
export function isDesktop(platform: Platform): boolean {
  return platform === 'tdesktop';
}

/**
 * Returns true in case, passed platform name describes browser version of
 * Telegram.
 * @param platform - platform name.
 */
export function isWeb(platform: Platform): boolean {
  return platform === 'webz';
}

/**
 * Returns true in case, passed platform name describes iOS version of Telegram.
 * @param platform - platform name.
 */
export function isIOS(platform: Platform): boolean {
  return platform === 'ios';
}

/**
 * Returns true in case, passed platform name describes Android version of
 * Telegram.
 * @param platform - platform name.
 */
export function isAndroid(platform: Platform): boolean {
  return platform === 'android';
}