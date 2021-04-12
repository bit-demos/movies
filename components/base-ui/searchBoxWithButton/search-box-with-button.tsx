// @ts-ignore
import React, {useState, useEffect} from 'react';
import cs from 'classNames';
import bootstrapStyles from '@teambit/movie-demo.styling.bootstrap-override';
import {Input} from '@teambit/movie-demo.base-ui.input';
import {PrimaryButton} from '@teambit/movie-demo.base-ui.button';

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
                    className={cs(bootstrapStyles["mr-2"], bootstrapStyles["col-md-8"], bootstrapStyles["align-self-stretch"])}
                    onInput={e => setInputValue(e.currentTarget.value)}
                    placeHolder={inputPlaceholder || "Enter text"}
                    value={inputValue}
                    onChange={() => {
                    }}
                />
                <PrimaryButton type="submit" className={cs(bootstrapStyles["text-truncate"])}
                               onClick={() => handleClick()}>{buttonText || "Submit"}</PrimaryButton>
            </div>

        </div>
    )
}

