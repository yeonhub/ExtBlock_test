import React from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockTitleScss.scss'
import { useTogglePopup } from '../../hooks/useTogglePopup';

const ExtBlockTitle = () => {
    const isPopupBtn = useTogglePopup();
    
    return (
        <>
            <div className='ExtBlockTitle'>
                <h2 className='title'>
                    ⚙️ 파일 확장자 차단
                    <span className='titleSpan' onClick={isPopupBtn}>모두 보기</span>
                </h2>
                <h3 className='subtitle'>
                    ( 파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한! )
                </h3>
            </div>
        </>
    );
};

export default ExtBlockTitle;