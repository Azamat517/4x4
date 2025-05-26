


import { useLocation } from 'react-router-dom';

const Model = () => {
    const location = useLocation();
    const carInfo = location.state;

    return (
        <div>
            <div className='model'>
                <div className='model__box'>{carInfo.name_model}</div>
            </div>
        </div>
    );
};


export default Model