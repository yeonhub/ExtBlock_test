import React, { useState } from 'react';
import { ExtBlockCustomData } from '../../assets/api/ExtBlockCustomData';
import { ExtBlockFixedData } from '../../assets/api/ExtBlockFixedData';
import '../../assets/css/ExtBlockCss/ExtBlockCustomScss.scss';

const ExtBlockCustom = () => {
    const [inputValue, setInputValue] = useState('');
    const [customData, setCustomData] = useState(ExtBlockCustomData);
    const [errorMessage, setErrorMessage] = useState('');
    const isInputEmpty = inputValue.trim() === '';

    const handleInputChange = (event) => {
        const value = event.target.value.slice(0, 20); // 최대 20자로 제한
        if (/^[a-zA-Z]*$/.test(value) || value === '') {
            setInputValue(value);
            setErrorMessage(value.length > 20 ? '⚠️ 20자 이내만 입력 가능합니다.' : '');
        } else {
            setErrorMessage('⚠️ 영어로만 입력해주세요.');
        }
    };

    const handleAddButtonClick = () => {
        if (/^[a-zA-Z]*$/.test(inputValue) && !isInputEmpty) {
            if (customData.includes(inputValue) || ExtBlockFixedData.includes(inputValue)) {
                setErrorMessage('⚠️ 이미 등록된 확장자입니다.');
            } else {
                setCustomData([...customData, inputValue]);
                setInputValue('');
                setErrorMessage('');
            }
        } else {
            setErrorMessage('⚠️ 영어로만 입력해주세요.');
        }
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter' && !isInputEmpty) {
            handleAddButtonClick();
        }
    };

    const handleDeleteButtonClick = (index) => {
        const newData = customData.filter((_, i) => i !== index);
        setCustomData(newData);
    };

    return (
        <div className='ExtBlockCustom'>
            <span className='customTitle'>
                🛠️ 커스텀 확장자
            </span>
            <input
                className='addCustom'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress}
                maxLength={20}
                placeholder="확장자 입력"
            />
            <button
                className='addCustomBtn'
                onClick={handleAddButtonClick}
                disabled={isInputEmpty}
            >
                +추가
            </button>
            {errorMessage && <p style={{height : '2dvh', color: 'red', margin: '2dvh', fontWeight: '600' }}>{errorMessage}</p>}
            {!errorMessage && <div style={{ height: '6dvh' }}></div>}
            <ul className='customUl'>
                {customData.map((item, index) => (
                    <li className='customLi' key={index}>
                        {item}
                        <button className='customDelBtn' onClick={() => handleDeleteButtonClick(index)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExtBlockCustom;
