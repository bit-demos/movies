// @ts-ignore
import React from 'react';
import {Button, PrimaryButton} from './button';


export const ButtonNoTheme = () => {
    return <Button>No theme</Button>
}

export const ButtonRegularTheme = () => {
    return (
        <PrimaryButton>main theme primary button</PrimaryButton>
    )
}

export const ButtonAltTheme = () => {
    return (
        <PrimaryButton>alternate theme primary button</PrimaryButton>
    )
}
