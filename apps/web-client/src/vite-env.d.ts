/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_COGNITO_REGION: string;
    readonly VITE_APP_COGNITO_USER_POOL_ID: string;
    readonly VITE_APP_COGNITO_APP_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}