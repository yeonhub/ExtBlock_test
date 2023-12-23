import React from 'react';
import ExtBlockCustomLi from './ExtBlockCustomLi';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomULScss.scss'

const ExtBlockCustomUL = ({ customData, customCount ,handleDeleteButtonClick}) => {
    
    return (
        <ul className='customUl'>
            <p className='countCustom'>
             [ {customCount} / 200 ]
            </p>
            {customData.map((item, index) => (
                <ExtBlockCustomLi
                    key={index}
                    item={item}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                />
            ))}
        </ul>
    );
};

export default ExtBlockCustomUL;

