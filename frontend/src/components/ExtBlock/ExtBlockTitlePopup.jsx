import React, { useRef } from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockPopupScss.scss'
import { useTogglePopup } from '../../hooks/useTogglePopup';
import { RenderFixedData } from './ExtBlockCurrent/RenderFixedLi';
import { RenderCustomData } from './ExtBlockCurrent/RenderCustomLi';
import { useExtBlockData } from '../../hooks/useExtBlockData';

const ExtBlockTitlePopup = () => {
    const isPopupBtn = useTogglePopup();
    const { isPopup, ExtBlockCustomData, ExtBlockFixedData } = useExtBlockData();

    const ulRef = useRef(null);

    const handleCopyClick = () => {
        const listItems = ulRef.current.querySelectorAll('li');
        const textToCopy = Array.from(listItems).map(li => li.textContent).join('\n');
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('복사 완료!'))
    };

    return (
        <>
            {
                isPopup
                    ?
                    <div className='popupContainer'>
                        <h3 className='popupTitle'>
                            차단되어있는 모든 확장자
                            <button className='popupCloseBtn' onClick={isPopupBtn}>
                                X
                            </button>
                        </h3>
                        <button className='copyButton' onClick={handleCopyClick}>모두 복사</button>
                        <ul className='popupUl' ref={ulRef}>
                            <RenderFixedData data={ExtBlockFixedData} />
                            <RenderCustomData data={ExtBlockCustomData} />
                        </ul>
                    </div>
                    :
                    null
            }
        </>
    );
};

export default ExtBlockTitlePopup;