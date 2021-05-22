import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CategoryRegister() {
    return(
        <PageDefault>
            <h1>
               Category Registration
            </h1>

            <Link to="/">
                Go back to home!
            </Link>
        </PageDefault>
    );
}

export default CategoryRegister;