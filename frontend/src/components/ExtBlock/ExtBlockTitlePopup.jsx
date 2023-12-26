import React from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockPopupScss.scss'
import { useTogglePopup } from '../../hooks/useTogglePopup';
import { RenderFixedData } from './ExtBlockCurrent/RenderFixedLi';
import { RenderCustomData } from './ExtBlockCurrent/RenderCustomLi';
import { useExtBlockData } from '../../hooks/useExtBlockData';

const ExtBlockTitlePopup = () => {
    const isPopupBtn = useTogglePopup();
    const { isPopup, ExtBlockCustomData, ExtBlockFixedData } = useExtBlockData();

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
                        <ul className='popupUl'>
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