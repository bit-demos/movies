// @ts-ignore
import React, {HTMLAttributes} from 'react';
import cs from 'classnames';
import styles from '@teambit/movie-demo.styling.bootstrap-override';

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
                className={cs(styles["form-control"], className)}
                placeholder={placeHolder}
                maxLength={256}
                value={value}
                {...rest}
            />
    );
};

