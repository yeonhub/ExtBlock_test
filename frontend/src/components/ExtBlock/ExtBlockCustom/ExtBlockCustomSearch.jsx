import React, { useState, useEffect } from 'react';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomSearchScss.scss'

const ExtBlockCustomSearch = ({ onSearch }) => {
    const [searchExtension, setSearchExtension] = useState('');

    const handleInputChange = (e) => {
        setSearchExtension(e.target.value.replace(/[^a-zA-Z]/g, ''));
    };

    useEffect(() => {
        onSearch(searchExtension);
    }, [searchExtension]);

    return (
        <div className='customSearch'>
            <input
                className='customSearchInput'
                maxLength={20}
                placeholder="확장자 검색"
                type="text"
                value={searchExtension}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default ExtBlockCustomSearch;
