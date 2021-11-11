import React, { useState } from 'react';
import { Text } from '@teambit/design.ui.input.text';
import { Button } from '@teambit/design.ui.buttons.button';
import { MovieApiContextProvider, UseMovieContext, MoviesContextResource } from './movies-api-context';
import './movies-api-context.compositions.scss';

const ConsumerComponent = () => {
    const [apiDataResult, getApiData] = UseMovieContext((searchStr: string): MoviesContextResource => ({
        params: {
          s: searchStr
        }
      })
    )
    const [inputValue, setInput] = useState("");

      function getData(){
          getApiData(inputValue);
      }

    return (
        <>
            <div className="comp-search">
                <Text 
                    onInput={e => setInput(e.currentTarget.value)} 
                    value={inputValue} 
                    className="comp-input"
                    placeholder="Search for movies"
                    />
                <Button onClick={getData}>Get Movies via API Context</Button>
            </div>
            <br />
            {apiDataResult?.data ? (
                <>
                    Data From Api: <br />
                    {JSON.stringify(apiDataResult.data.Search)}
                </>
            ) : "Nothing to display"}
        </>
    )
}

export function MoviesApiContextExample(){
    return (

        <MovieApiContextProvider>
            <ConsumerComponent />
        </ MovieApiContextProvider>
    )

}