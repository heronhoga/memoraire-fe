interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_PORT: string;
  readonly PUBLIC_APP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}