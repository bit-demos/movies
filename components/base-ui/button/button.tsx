// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
    className?: string,
    onClick?: any,
    type?: any
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({className = "", onClick, type = "button", ...rest }: ButtonProps) => {
    return (
        <button
            type={type}
            className={cs(styles.Button, className)}
            onClick={onClick}
            {...rest}
        />
    )
}

export const PrimaryButton = ({
                                  className = "",
                                  onClick,
                                  children,
                                  type,
                                  ...rest
                              }: ButtonProps) => {
    return (
        <Button
            className={cs(styles.primary, className)}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {children}
        </Button>
    )
}

export const PrimaryCtaButton = ({
    className = "",
    onClick,
    children,
    ...rest
}: ButtonProps) => {
return (
<Button
className={cs(styles.cta, className)}
onClick={onClick}
{...rest}
>
{children}
</Button>
)
}
