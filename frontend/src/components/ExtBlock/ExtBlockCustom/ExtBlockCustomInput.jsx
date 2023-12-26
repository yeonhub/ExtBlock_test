import React, { useState } from 'react';
import ExtBlockCustomInputUI from './ExtBlockCustomInputUI';
import { useDispatch } from 'react-redux';
import { addExtBlockCustom } from '../../../store/modules/ExtBlockSlice';

// 유효성 검사(영문, 20자 제한)
const validateInput = (value) => {
    if (!(/^[a-zA-Z]*$/.test(value) || value === '')) {
        return '⚠️ 영어로만 입력해주세요.';
    } else if (value.length > 20) {
        return '⚠️ 20자 이내만 입력 가능합니다.';
    }
    return '';
}
// 유효성 검사(최대 등록, 중복)
const canAddExtension = (customCount, customData, fixedData, inputValue) => {
    if (customCount >= 200) {
        return '⚠️ 최대 200개까지 등록 가능합니다.';
    } else if (customData.some(data => data.extension === inputValue) || fixedData.some(data => data.extension === inputValue)) {
        return '⚠️ 이미 등록된 확장자입니다.';
    }
    return '';
}

const ExtBlockCustomInput = ({ customData, fixedData, customCount }) => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const isInputEmpty = inputValue.trim() === '';
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const value = event.target.value;
        const errorMessage = validateInput(value);
        if (errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            setInputValue(value);
            setErrorMessage('');
        }
    };

    const handleAddButtonClick = () => {
        const errorMessage = canAddExtension(customCount, customData, fixedData, inputValue);
        if (errorMessage) {
            setErrorMessage(errorMessage);
        } else {
            let id = customCount + 1
            dispatch(addExtBlockCustom({ inputValue, id }))
            setInputValue('');
            setErrorMessage(`💬 ` + inputValue + ` 등록 완료`);
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
