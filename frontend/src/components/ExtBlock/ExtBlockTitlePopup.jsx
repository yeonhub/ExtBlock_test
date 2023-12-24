import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/ExtBlockCss/ExtBlockPopupScss.scss'

const ExtBlockTitlePopup = () => {
    const isPopup = useSelector(state => state.ExtBlockReducer.isPopup)
    const ExtBlockCustomData = useSelector(state => state.ExtBlockReducer.ExtBlockCustom);
    const ExtBlockFixedData = useSelector(state => state.ExtBlockReducer.ExtBlockFixed);

    const dispatch = useDispatch();

    const isPopupBtn = () => {
        dispatch({ type: 'ExtBlock/togglePopup' });
    }

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
                            {
                                ExtBlockFixedData.filter(ele => ele.isChecked).map((ele) => (
                                    <li className='popupLi' key={ele.id}>
                                        {ele.extension}
                                    </li>
                                ))
                            }
                            {
                                ExtBlockCustomData.map((ele) => (
                                    <li className='popupLi' key={ele.id}>
                                        {ele.extension}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :
                    null
            }
        </>
    );
};

export default ExtBlockTitlePopup;