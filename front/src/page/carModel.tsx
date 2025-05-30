import { useLocation, useNavigate } from "react-router-dom";


const CarModel = () => {

    const location = useLocation();
    const carInfo = location.state;
    const carModels = carInfo?.carModel || [];

    const navigate = useNavigate();

    return (
        <div>
            <div className="carModel">
                <div className="carModel__box">
                    <div className="carModel__box__logo">
                        <img className='carModel__box__logo__image'
                            src={carInfo.image_model} alt="image" />
                        <div className='carModel__box__log__box-name'>
                            <div>{carInfo.name_model}</div>
                        </div>

                    </div>
                    <div>
                        <div className="carModel__box-model">{carModels.map((carModel: any) => (
                            <button onClick={() => navigate('/ImageCar', { state: carModel })}
                                className="carModel__box-model__cars" key={carModel.id}>
                                <div className="carModel__box-mode__name">{carModel.name_car}</div>
                                <img className="carModel__box-model__image" src={carModel.image} alt="image" />
                            </button>
                        ))}</div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default CarModel