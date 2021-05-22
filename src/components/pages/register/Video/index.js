import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function VideoRegister() {
    return(
        <PageDefault>
            <h1>
               Video Registration
            </h1>

            <Link to="/register/category">
                Category Registration
            </Link>
        </PageDefault>
    );
}

export default VideoRegister;