import React from 'react';
import { MemoryRouter } from 'react-router';
import { Link } from '@learn-bit-react/base-ui.ui.link'

// Link to example component which is a concrete implementation of this factory
export const LinkToUseSearchMovie = () => {
    return (
        <MemoryRouter>

            Please see the <Link href="https://bit.dev/learn-bit-react/movies/movies/data/hooks/use-search-movies" external>Use Search Movies component</Link> for
            a full composition of this component.
        </MemoryRouter>
    )
}
