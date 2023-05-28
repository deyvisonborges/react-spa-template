declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
  }
}

interface ImportMetaEnv {
  readonly VITE_TEST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
