// @ts-ignore
import React from 'react';
import cs from 'classnames';
import styles from '@teambit/movie-demo.styling.bootstrap-override';
import {Card} from './index';

const cardWithContent = (children, img?) => {
    return (
        <div style={{maxWidth: 600}}>
            <Card className={cs(styles["w-50"], styles["mb-8"])} img={img}>{children}</Card>
        </div>
    )
}

export const CardWithLink = () => {
    return (
        cardWithContent(
            (<a className={cs(styles["card-link"])} href="#" onClick={() => {
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
