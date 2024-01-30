/* eslint-disable import/no-unresolved */
import { withAuthenticator } from "@aws-amplify/ui-react"
import { PropsWithChildren } from "react";
import '@aws-amplify/ui-react/styles.css';

const Authentication = ({ children }: PropsWithChildren) => children

export default withAuthenticator(Authentication)