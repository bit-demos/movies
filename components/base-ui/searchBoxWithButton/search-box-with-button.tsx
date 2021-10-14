// @ts-ignore
import React, {useState, useEffect} from 'react';
import cs from 'classnames';
import {Input} from '@learn-bit-react/movies.base-ui.input';
import {PrimaryButton} from '@learn-bit-react/movies.base-ui.button';

import styles from "./search-box-with-button.module.scss";

export type SearchBoxWithButtonProps = {
    buttonText?: string,
    inputPlaceholder?: string,
    onSubmit?: any;
}

export const SearchBoxWithButton = ({onSubmit, buttonText, inputPlaceholder}: SearchBoxWithButtonProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit && onSubmit(inputValue);
    }

    return (
        <div className={cs(styles.container)}>
            <form 
                className={cs(styles.search)}
                onSubmit={e => handleSubmit(e)}
            >
                <Input
                    className={cs(styles.input)}
                    onInput={e => setInputValue(e.currentTarget.value)}
                    placeHolder={inputPlaceholder || "Enter text"}
                    value={inputValue}
                    onChange={() => {
                    }}
                />
                <PrimaryButton type="submit" className={cs(styles.button)}>
                    {buttonText || "Submit"}
                </PrimaryButton>
            </form>

        </div>
    )
}

