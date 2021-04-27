import React from 'react'
import {mockMovieList} from './index'

export const MovieExample = () => {
    return (
        <div>
            {mockMovieList[0].Poster}
        </div>
    )
}