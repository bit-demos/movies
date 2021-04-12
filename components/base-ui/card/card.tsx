// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import { Card as BaseCard}  from '@teambit/base-ui.surfaces.card';
import { BaseImage } from '@teambit/base-ui.elements.image';
import styles from './card.module.scss';

export type CardProps = { img? } & HTMLAttributes<HTMLDivElement>;

export const defaultProps: CardProps = {
    className: "",
    img: "https://i1.wp.com/css-tricks.com/wp-content/uploads/2017/08/facebook-skeleton.png?ssl=1"
}

export const Card = ({
                         className = defaultProps.className,
                         children,
                         img = defaultProps.img,
                         ...rest
                     }: CardProps) => {
    return (
        <BaseCard className={cs(styles.card)}>
            <BaseImage className={cs(styles.image)} src={img} alt="Card image caption"/>
            <div className={cs(styles.content)}>
                {children}
            </div>
        </BaseCard>
    )
}
