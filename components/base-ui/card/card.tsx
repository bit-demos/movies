// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import styles from '@teambit/movie-demo.styling.bootstrap-override';

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
        <div className={cs(styles["card-horizontal-bleed"], styles["mt-5"], styles["mb-5"])}>
            <img className={cs(styles["card-img-top"])} src={img}
                 alt="Card image caption"/>
            <div className={cs(styles["card-body"])}>
                {children}
            </div>
        </div>
    )
}
