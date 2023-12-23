import React from 'react';
import '../../../assets/css/ExtBlockCss/ExtBlockFixedScss.scss'
import ExtBlockFixedLi from './ExtBlockFixedLi';

const ExtBlockFixedUl = ({ ExtBlockFixedData }) => {
    return (
        <div className='ExtBlockFixed'>
            <span className='fixedTitle'>
                📌 고정 확장자
            </span>
            <ul className='fixedUl'>
                {ExtBlockFixedData.map((item) => (
                    <ExtBlockFixedLi
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExtBlockFixedUl;