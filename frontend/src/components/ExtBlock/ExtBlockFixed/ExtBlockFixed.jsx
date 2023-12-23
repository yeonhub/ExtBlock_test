import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExtBlockFixed } from '../../../store/modules/ExtBlockSlice';
import ExtBlockFixedUl from './ExtBlockFixedUl';

const ExtBlockFixed = () => {
    const ExtBlockFixedData = useSelector(state => state.ExtBlockReducer.ExtBlockFixed);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExtBlockFixed())
    }, [])


    return (
        <ExtBlockFixedUl
            ExtBlockFixedData={ExtBlockFixedData}
        />
    );
};

export default ExtBlockFixed;
