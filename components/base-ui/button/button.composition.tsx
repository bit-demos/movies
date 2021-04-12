// @ts-ignore
import React from 'react';
import { ThemeContext } from '@teambit/movie-demo.theme.theme-context';
import { altTheme } from '@teambit/movie-demo.theme.alt-theme';
import {Button, PrimaryButton, PrimaryCtaButton } from './button';


export const ButtonNoTheme = () => {
    return <Button>No theme</Button>
}

export const PrimaryButtonRegularTheme = () => {
    return (
        <PrimaryButton>main theme primary button</PrimaryButton>
    )
}

export const PrimaryButtonAltTheme = () => {
    return (
        <ThemeContext palette={altTheme}>
            <PrimaryButton>alternate theme primary button</PrimaryButton>
        </ThemeContext>
    )
}

export const PrimaryCtaButtonMainTheme = () => {
    return (
        <PrimaryCtaButton>alternate theme primary button</PrimaryCtaButton>
    )
}
