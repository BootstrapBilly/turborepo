import { ResourcesConfig } from "aws-amplify";

export const cognitoConfig: ResourcesConfig = {
    Auth: {
        Cognito: {
            userPoolClientId: import.meta.env.VITE_APP_COGNITO_APP_CLIENT_ID,
            userPoolId: import.meta.env.VITE_APP_COGNITO_USER_POOL_ID
        }
    },
};

console.log(import.meta.env.VITE_APP_COGNITO_APP_CLIENT_ID.at(5))
console.log(import.meta.env.VITE_APP_COGNITO_USER_POOL_ID.at(5))