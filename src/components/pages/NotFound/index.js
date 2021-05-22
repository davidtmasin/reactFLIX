import React from 'react';
import PageDefault from '../../PageDefault';

function NotFoundPage() {
    
    return(
        <PageDefault>
            <center><p>404 NOT FOUND! :(</p></center>
            <div>
                <iframe src="https://links-david.vercel.app/" width="100%" height="450" title="Development Contacts">
                </iframe>
            </div>
        </PageDefault>

    );
  
}

export default NotFoundPage;