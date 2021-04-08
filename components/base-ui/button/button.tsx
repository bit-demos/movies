// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import styles from '@teambit/movie-demo.styling.bootstrap-override';

export type ButtonProps = {
    className?: string,
    onClick?: any,
    type?: any
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({className = "", onClick, type = "button", ...rest }: ButtonProps) => {
    return (
        <button
            type={type}
            className={cs(styles["btn"], className)}
            onClick={onClick}
            {...rest}
        />
    )
}

export const PrimaryButton = ({
                                  className = "",
                                  onClick,
                                  children,
                                  ...rest
                              }: ButtonProps) => {
    return (
        <Button
            className={cs(styles["btn-primary"], className)}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Button>
    )
}
