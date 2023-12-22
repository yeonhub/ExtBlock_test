import React, { useEffect, useState } from 'react';
import '../../assets/css/ExtBlockCss/ExtBlockFixedScss.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getExtBlockFixed } from '../../store/modules/ExtBlockSlice';



const ExtBlockFixed = () => {
    const ExtBlockFixedData = useSelector(state => state.ExtBlockReducer.ExtBlockFixed);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExtBlockFixed())
    }, [])

    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckboxChange = (event, item) => {
        setCheckedItems({
            ...checkedItems,
            [item]: event.target.checked
        });
    };

    return (
        <div className='ExtBlockFixed'>
            <span className='fixedTitle'>
                📌 고정 확장자
            </span>
            <ul className='fixedUl'>
                {ExtBlockFixedData.map((item, index) => (
                    <li className='fixedLi' key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                name={item.extension}
                                value={item.extension}
                                checked={checkedItems[item.extension] || item.isChecked === 1}
                                onChange={(e) => handleCheckboxChange(e, item.extension)}
                            />
                            {item.extension}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExtBlockFixed;
