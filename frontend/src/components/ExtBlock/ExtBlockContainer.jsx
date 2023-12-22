import React from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockContainerScss.scss'

const ExtBlockContainer = (props) => {
    return (
        <>
            <div className='ExtBlockContainer'>
                {props.children}
            </div>
        </>
    );
};
export default ExtBlockContainer;