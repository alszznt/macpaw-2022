import React from 'react';

import { UploadPageInstruments } from '../page-instruments';

const UploadPage = () => {
    return(
        <div className = "pages-layout-apload-overlay">
            <div className = "pages-layout-apload-page">
                <div />
                <UploadPageInstruments />
            </div>
        </div>
    )
}

export default UploadPage;