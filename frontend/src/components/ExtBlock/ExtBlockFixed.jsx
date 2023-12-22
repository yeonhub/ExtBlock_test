import React, { useState } from 'react';
import { ExtBlockFixedData } from '../../assets/api/ExtBlockFixedData';
import '../../assets/css/ExtBlockCss/ExtBlockFixedScss.scss'

const ExtBlockFixed = () => {
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
                    <li className='fixedLi' key={index}>
                        <label>
                            <input
                                type="checkbox"
                                value={item}
                                checked={checkedItems[item] || false}
                                onChange={(e) => handleCheckboxChange(e, item)}
                            />
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExtBlockFixed;
