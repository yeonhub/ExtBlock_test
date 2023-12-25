import React from 'react';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomLiScss.scss'

const ExtBlockCustomLi = ({ item, searchText, handleDeleteButtonClick }) => {
    const { id, extension } = item;
    const isMatched = searchText && extension.toLowerCase().includes(searchText.toLowerCase());

    const style = isMatched ? { backgroundColor: 'tan' } : {};

    return (
        <li className='customLi' style={style}>
            {extension}
            <button className='customDelBtn' onClick={() => handleDeleteButtonClick(id)}>
                X
            </button>
        </li>
    );
};

export default ExtBlockCustomLi