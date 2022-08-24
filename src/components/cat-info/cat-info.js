import React from 'react';

import './cat-info.scss';

const CatInfo = ({ data }) => {

    return(
        <div className = "cat-info">
            <div className = "cat-info-name">
                { data.name }
            </div>
            <div className = "cat-info-general-conatiner">
                <div className = "cat-info-alt-name">{ data.alt_names }</div>
                <div className = "cat-info-general">
                    <div className = "cat-info-general-left">
                        <div className = "cat-info-bolt-text">Temperament: </div>
                        <div className = "cat-info-text">{ data.temperament }</div>
                    </div>
                    <div className = "cat-info-general-right">
                        <div className = "cat-info-text">
                            <span className = "cat-info-bolt-text">Origin: </span>
                            { data.origin }
                        </div>
                        <div className = "cat-info-text">
                            <span className = "cat-info-bolt-text">Weight: </span>
                            { data.weight.metric }
                        </div>
                        <div className = "cat-info-text">
                            <span className = "cat-info-bolt-text">Life span: </span>
                            { data.life_span }
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default CatInfo;