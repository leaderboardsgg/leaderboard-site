export interface LanguageIndexFile {
  welcome?: string
  login?: string
  signup?: string
}

declare global {
  function $t(stringToTranslate: keyof LanguageIndexFile): string
}
