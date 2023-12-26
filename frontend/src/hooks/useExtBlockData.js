import { useSelector } from 'react-redux';

export const useExtBlockData = () => {
    const isPopup = useSelector(state => state.ExtBlockReducer.isPopup);
    const ExtBlockCustomData = useSelector(state => state.ExtBlockReducer.ExtBlockCustom);
    const ExtBlockFixedData = useSelector(state => state.ExtBlockReducer.ExtBlockFixed);

    return { isPopup, ExtBlockCustomData, ExtBlockFixedData };
};