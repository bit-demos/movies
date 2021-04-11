// @ts-ignore
import React, {useState} from 'react';
import {Input} from './input';

export const SimpleInput = () => {
    const [value, setValue] = useState('');
    return <Input onChange={e => setValue(e.currentTarget.value)} value={value}/>;
};

export const InputWithPlaceHolder = () => {
    const [value, setValue] = useState('');
    return <Input placeHolder="Search" onChange={e => setValue(e.currentTarget.value)} value={value}/>;
};

export const InputWithCustomStyles = () => {
    const [value, setValue] = useState('');
    return <Input style={{color: 'blue', borderColor: 'red'}} onChange={e => setValue(e.currentTarget.value)} value={value}/>;
};
