export const RenderCustomData = ({ data }) => (
    data.map((ele) => (
        <li className='popupLi' key={ele.id}>
            {ele.extension}
        </li>
    ))
);