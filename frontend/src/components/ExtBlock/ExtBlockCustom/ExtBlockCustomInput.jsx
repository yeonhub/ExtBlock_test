import React, { useState } from 'react';
import ExtBlockCustomInputUI from './ExtBlockCustomInputUI';
import { useDispatch } from 'react-redux';
import { addExtBlockCustom } from '../../../store/modules/ExtBlockSlice';

const ExtBlockCustomInput = ({ customData, fixedData, customCount }) => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const isInputEmpty = inputValue.trim() === '';
    const dispatch = useDispatch()

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
        if (customCount >= 200) {
            setErrorMessage('⚠️ 최대 200개까지 등록 가능합니다.');
        } else if (customData.some(data => data.extension === inputValue) || fixedData.some(data => data.extension === inputValue)) {
            setErrorMessage('⚠️ 이미 등록된 확장자입니다.');
        } else {
            let id = customCount + 1
            dispatch(addExtBlockCustom({ inputValue, id }))
            setInputValue('');
            setErrorMessage('');
        }
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter' && !isInputEmpty) {
            handleAddButtonClick();
        }
    };

    return <ExtBlockCustomInputUI
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleEnterKeyPress={handleEnterKeyPress}
        handleAddButtonClick={handleAddButtonClick}
        isInputEmpty={isInputEmpty}
        errorMessage={errorMessage}
    />;
};

export default ExtBlockCustomInput;
