import { useEffect, useState } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";


export const AddPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);
    const [carModels, setCarModels] = useState<any[]>([]);
    const [carYears, setCarYears] = useState<any[]>([]);
    const [carMake, setCarMake] = useState('')
    const [carID, setID] = useState('')
    const [carYearID, setYearID] = useState('')
    const [carModel, setCarModel] = useState('')
    const [carModelYear, setCarModelYear] = useState('')
    const [image, setImage] = useState('')
    const [test, setTest] = useState(false)
    const [yearCar, setYearCar] = useState(false)

    useEffect(() => {
        dispatch(getModel());
    }, [dispatch]);


    const postData = async () => {
        if (!image) {
            alert('Введите данные');
            return;
        }
        const formData = new FormData();
        formData.append('imageCar', image);
        formData.append('carImageId', String(carYearID));

        try {
            const response = await fetch(`http://localhost:3000/car-image`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const fileChangeHandler = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    function models() {
        setTest(!test);
        
    }

    function year() {
        setYearCar(!yearCar);
    }
  const navigate = useNavigate();
    function tests(){
        navigate('/');
        postData()
    }

    return (
        <div>
            <div className="addPage">

                <div className="addPage__box">{cars.carInfo.map((i, index) => (
                    <button key={index}
                        onClick={() => {
                            setCarMake(i.name_model,)
                            setID(i.id)
                            setCarModels(i.carModel || []);
                            models()
                        }} >
                        <div className="addPage__box__box__name">{i.name_model}</div>
                        <img className="addPage__box__box__image" src={i.image_model} alt="image" />
                    </button>
                ))}</div>
                {test && (
                    <div className="addPage__list">{carModels.map((carModel: any) => (
                        <button onClick={() => {
                            setCarModel(carModel.name_car)
                            setCarYears(carModel.carYear || [])
                            year()
                        }
                        } className="addPage__list__box" key={carModel.id}>{carModel.name_car}</button>
                    ))}</div>
                )}
                {
                    yearCar && (
                        <div className="addPage__list">
                            {carYears.map((carYear: any) => (
                                <button onClick={() => {
                                    setCarModelYear(carYear.car_year)
                                    setYearID(carYear.id)
                                }} className="addPage__list__box" key={carYear.id}>{carYear.car_year}
                                    <div className="addPage__list__box__body">({carYear.body_number})</div></button>
                            ))}
                        </div>
                    )
                }
                <div className="addPage__inp-box">
                    <div className="addPage__inp-box__inp-car">
                        <div className="addPage__inp-box__inp-car__name">Марка машины</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carMake}
                            onChange={(e) => setCarMake(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car" style={{display: 'none'}}>
                        <div className="addPage__inp-box__inp-car__name" >ID машины</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carID}
                            onChange={(e) => setID(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car">
                        <div className="addPage__inp-box__inp-car__name">Модель машины</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carModel}
                            onChange={(e) => setCarModel(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car">
                        <div className="addPage__inp-box__inp-car__name">Год выуска</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carModelYear}
                            onChange={(e) => setCarModelYear(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car" style={{display: 'none'}}>
                        <div className="addPage__inp-box__inp-car__name" > ID Год выуска</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carYearID}
                            onChange={(e) => setYearID(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car" >
                        <div className="addPage__inp-box__inp-car__name"> Загрузка картинок</div>
                        <input name="imageCar" onChange={fileChangeHandler} type="file" />
                    </div>
                    <div className="addPage__img">
                        <button onClick={tests} className="addPage__img__btn">Add Image</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
