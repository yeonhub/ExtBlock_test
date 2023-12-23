import React from 'react';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomLiScss.scss'

const ExtBlockCustomLi = ({ item, handleDeleteButtonClick }) => {
    const { id, extension } = item
    return (
        <li className='customLi'>
            {extension}
            <button className='customDelBtn' onClick={()=>handleDeleteButtonClick(id)}>
                X
            </button>
        </li>
    );
};

export default ExtBlockCustomLi;
