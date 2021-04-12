// @ts-ignore
import React from 'react';
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
