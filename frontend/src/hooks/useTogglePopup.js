import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/modules/ExtBlockSlice';

export const useTogglePopup = () => {
    const dispatch = useDispatch();
    return () => dispatch(togglePopup());
};