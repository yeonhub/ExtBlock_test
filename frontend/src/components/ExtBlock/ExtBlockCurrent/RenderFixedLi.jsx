export const RenderFixedData = ({ data }) => (
    data.filter(ele => ele.isChecked).map((ele) => (
        <li className='popupLi' key={ele.id}>
            {ele.extension}
        </li>
    ))
);