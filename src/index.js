// Until babel supports excluding external polyfills
// import 'babel-polyfill';

// IME event listener DOM helpers
export { default as bind } from './bind';
export { default as unbind } from './unbind';

// Writing system checks
export { default as isRomaji } from './isRomaji';
export { default as isJapanese } from './isJapanese';
export { default as isKana } from './isKana';
export { default as isHiragana } from './isHiragana';
export { default as isKatakana } from './isKatakana';
export { default as isMixed } from './isMixed';
export { default as isKanji } from './isKanji';

// Conversion
export { default as toRomaji } from './toRomaji';
export { default as toKana } from './toKana';
export { default as toHiragana } from './toHiragana';
export { default as toKatakana } from './toKatakana';

// Other utils
export { default as stripOkurigana } from './stripOkurigana';
export { default as tokenize } from './tokenize';

export { VERSION, TO_KANA_METHODS, ROMANIZATIONS } from './constants';
