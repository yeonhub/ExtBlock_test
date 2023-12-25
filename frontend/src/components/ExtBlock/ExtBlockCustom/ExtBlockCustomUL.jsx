import React, { useState } from 'react';
import ExtBlockCustomLi from './ExtBlockCustomLi';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomULScss.scss'
import ExtBlockCustomSearch from './ExtBlockCustomSearch';

const ExtBlockCustomUL = ({ customData, customCount, handleDeleteButtonClick }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    };
    return (
        <ul className='customUl'>
            <div className='customInfo'>
                <span className='customCount'>
                    [ {customCount} / 200 ]
                </span>
                {/* <em className='coustomButton'>
                <button className='delAllCustom'>
                    모두 삭제
                </button>
                <button className='recallAllCustom' onClick={handleRecallButtonClick}>
                    되돌리기
                </button>
                
                </em> */}
                <ExtBlockCustomSearch onSearch={handleSearch} />
            </div>
            {customData.map((item, index) => (
                <ExtBlockCustomLi
                    key={index}
                    item={item}
                    searchText={searchText}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                />
            ))}
        </ul>
    );
};

export default ExtBlockCustomUL;

