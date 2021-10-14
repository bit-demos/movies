// @ts-ignore
import React from 'react';
import { ThemeContext } from '@learn-bit-react/movies.theme.theme-context';
import { altTheme } from '@learn-bit-react/movies.theme.alt-theme';
import {Card} from './index';

const cardWithContent = (children, img?) => {
    return (
        <div style={{maxWidth: 600}}>
            <Card img={img}>{children}</Card>
        </div>
    )
}

export const CardWithLink = () => {
    return (
        cardWithContent(
            (<a href="#" onClick={() => {
                return false
            }} aria-label="A useful link description goes here">
                Some interesting link text
            </a>),
            "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg",
        )
    )
}

export const CardWithText = () => {
    return (
        cardWithContent("regular text on a card")
    )
}

export const CardWithLinkAltTheme = () => {
    return (
        <ThemeContext palette={altTheme}>
            {
                cardWithContent(
                    (<a href="#" onClick={() => {
                        return false
                    }} aria-label="A useful link description goes here">
                        Some interesting link text
                    </a>),
                    "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg",
                )
            }
        </ThemeContext>        
    )
}



