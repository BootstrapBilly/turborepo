import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => JSX.Element;

interface IHeaderProps {
    children: React.ReactNode;
}
declare const Header: ({ children }: IHeaderProps) => JSX.Element;

export { Button, Header };
