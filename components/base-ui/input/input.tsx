// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import styles from './input.module.scss';

type Props = {
    placeHolder?: string;
    value?: string;
    className?: any;
} & HTMLAttributes<HTMLInputElement>;

export const Input = ({
                          placeHolder = 'place holder',
                          value = '',
                          className,
                          ...rest
                      }: Props) => {
    return (
            <input
                type="text"
                className={cs(styles.evaInput, className)}
                placeholder={placeHolder}
                maxLength={256}
                value={value}
                {...rest}
            />
    );
};

