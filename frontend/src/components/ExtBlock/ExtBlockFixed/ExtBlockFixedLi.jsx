import React from 'react';
import { useDispatch } from 'react-redux';
import { putExtBlockFixedChk } from '../../../store/modules/ExtBlockSlice';

const ExtBlockFixedLi = ({ item }) => {
    const { id, extension, isChecked } = item
    const dispatch = useDispatch()
    
    const handleCheckboxChange = (event) => {
        const currentChk = event.target.checked
        dispatch(putExtBlockFixedChk({ id, currentChk }))
    }

    return (
        <li className='fixedLi' key={id}>
            <label>
                <input
                    type="checkbox"
                    name={extension}
                    value={extension}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {extension}
            </label>
        </li>
    );
};

export default ExtBlockFixedLi;