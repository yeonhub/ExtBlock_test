import React from 'react';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomInputUIScss.scss'

const ExtBlockCustomInputUI = ({ inputValue, handleInputChange, handleEnterKeyPress, handleAddButtonClick, isInputEmpty, errorMessage }) => {
    return (
        <>
            <input
                className='addCustom'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress}
                placeholder="확장자 입력"
            />
            <span className='addCustomCount'>
                {inputValue.length} / 20
            </span>
            <button
                className='addCustomBtn'
                onClick={handleAddButtonClick}
                disabled={isInputEmpty}
            >
                +추가
            </button>
            {errorMessage && <p style={{ height: '2dvh', color: 'red', margin: '2dvh', fontWeight: '600' }}>{errorMessage}</p>}
            {!errorMessage && <div style={{ height: '6dvh' }}></div>}
        </>
    );
};

export default ExtBlockCustomInputUI;