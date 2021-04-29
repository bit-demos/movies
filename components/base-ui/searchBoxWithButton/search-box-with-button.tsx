// @ts-ignore
import React, {useState, useEffect} from 'react';
import cs from 'classnames';
import {Input} from '@learn-harmony/movies.base-ui.input';
import {PrimaryButton} from '@learn-harmony/movies.base-ui.button';

import styles from "./search-box-with-button.module.scss";

export type SearchBoxWithButtonProps = {
    buttonText?: string,
    inputPlaceholder?: string,
    onClicked?: any;
}

export const SearchBoxWithButton = ({onClicked, buttonText, inputPlaceholder}: SearchBoxWithButtonProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        onClicked && onClicked(inputValue);
    }

    return (
        <div className={cs(styles.container)}>
            <div className={cs(
                styles.search
            )}>
                <Input
                    className={cs(styles.input)}
                    onInput={e => setInputValue(e.currentTarget.value)}
                    placeHolder={inputPlaceholder || "Enter text"}
                    value={inputValue}
                    onChange={() => {
                    }}
                />
                <PrimaryButton type="submit" className={cs(styles.button)}
                               onClick={() => handleClick()}>{buttonText || "Submit"}</PrimaryButton>
            </div>

        </div>
    )
}

