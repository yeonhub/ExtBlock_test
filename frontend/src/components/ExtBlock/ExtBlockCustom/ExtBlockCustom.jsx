import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delExtBlockCustom, getExtBlockCustom, getExtBlockFixed } from '../../../store/modules/ExtBlockSlice';
import ExtBlockCustomInput from './ExtBlockCustomInput';
import ExtBlockCustomUL from './ExtBlockCustomUL';
import '../../../assets/css/ExtBlockCss/ExtBlockCustomScss.scss'

const ExtBlockCustom = () => {
    const ExtBlockCustomData = useSelector(state => state.ExtBlockReducer.ExtBlockCustom);
    const ExtBlockFixedData = useSelector(state => state.ExtBlockReducer.ExtBlockFixed);
    const dispatch = useDispatch();
    const [customCount, setCustomCount] = useState(0)

    useEffect(() => {
        dispatch(getExtBlockCustom());
    }, []);

    useEffect(() => {
        dispatch(getExtBlockFixed());
    }, []);

    const [customData, setCustomData] = useState([]);
    const [fixedData, setFixedData] = useState([]);

    useEffect(() => {
        setCustomData(ExtBlockCustomData);
    }, [ExtBlockCustomData]);
    
    useEffect(() => {
        setCustomCount(customData.length);
    }, [customData]); 


    useEffect(() => {
        setFixedData(ExtBlockFixedData);
    }, [ExtBlockFixedData]);

    const handleDeleteButtonClick = (id) => {
        dispatch(delExtBlockCustom(id)).then(() => {
            dispatch(getExtBlockCustom());
        });
    }
    return (
        <div className='ExtBlockCustom'>
            <span className='customTitle'>
                🛠️ 커스텀 확장자
            </span>
            <ExtBlockCustomInput setCustomData={setCustomData} fixedData={fixedData} customData={customData} customCount={customCount} />
            <ExtBlockCustomUL customData={customData} customCount={customCount} handleDeleteButtonClick={handleDeleteButtonClick} />
        </div>
    );
};

export default ExtBlockCustom;
