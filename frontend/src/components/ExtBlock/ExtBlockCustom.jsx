import React, { useEffect, useState } from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockCustomScss.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getExtBlockCustom } from '../../store/modules/ExtBlockSlice';

const ExtBlockCustom = () => {
    const ExtBlockCustomData = useSelector(state => state.ExtBlockReducer.ExtBlockCustom);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExtBlockCustom())
    }, [])

    const [inputValue, setInputValue] = useState('');
    const [customData, setCustomData] = useState([]);
    useEffect(() => {
        setCustomData(ExtBlockCustomData);
    }, [ExtBlockCustomData])

    const [errorMessage, setErrorMessage] = useState('');
    const isInputEmpty = inputValue.trim() === '';
    const handleInputChange = (event) => {
        const value = event.target.value;
    
        if (/^[a-zA-Z]*$/.test(value) || value === '') {
            if (value.length <= 20) {
                setInputValue(value);
                setErrorMessage('');
            } else {
                setErrorMessage('⚠️ 20자 이내만 입력 가능합니다.');
            }
        } else {
            setErrorMessage('⚠️ 영어로만 입력해주세요.');
        }
    };
    

    const handleAddButtonClick = () => {
        if (customData.includes(inputValue) || ExtBlockFixedData.includes(inputValue)) {
            setErrorMessage('⚠️ 이미 등록된 확장자입니다.');
        } else {
            setCustomData([...customData, inputValue]);
            setInputValue('');
            setErrorMessage('');
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
                placeholder="확장자 입력"
            />
            <button
                className='addCustomBtn'
                onClick={handleAddButtonClick}
                disabled={isInputEmpty}
            >
                +추가
            </button>
            {errorMessage && <p style={{ height: '2dvh', color: 'red', margin: '2dvh', fontWeight: '600' }}>{errorMessage}</p>}
            {!errorMessage && <div style={{ height: '6dvh' }}></div>}
            <ul className='customUl'>
                {customData.map((item, index) => (
                    <li className='customLi' key={item.id}>
                        {item.extension}
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
