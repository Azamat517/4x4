
import { useLocation } from 'react-router-dom';

const Model = () => {
    const location = useLocation();
    const carInfo = location.state;
    const carModels = carInfo?.carModel || [];

    return (
        <div>
            <div className='model'>
                <div className='model__box'>
                    <div className='model__box__logo'>
                        <img className='model__box__logo__image' 
                        src={carInfo.image_model} alt="image" />
                        <div className='model__box__log__box-name'>
                            <div>{carInfo.name_model}</div>
                        </div>
                    </div>
                    <div className='model__box-model'>
                            {carModels.map((car: any) => (
                                <div className='model__box-model__box' key={car.id}>
                                  <div className='model__box-model__box__name'>{car.name_car}</div>
                                    <img className='model__box-model__box__image' src={car.image} alt={car.name_car} /> 
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model