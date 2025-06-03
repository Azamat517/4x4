import { useEffect, useState } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";


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
    const [test, setTest] = useState(false)
    const [yearCar, setYearCar] = useState(false)

    useEffect(() => {
        dispatch(getModel());

    }, [dispatch]);


    function models() {
        setTest(!test);
    }

    function year() {
        setYearCar(!yearCar);
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
                    <div className="addPage__inp-box__inp-car" >
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
                    <div className="addPage__inp-box__inp-car">
                        <div className="addPage__inp-box__inp-car__name"> ID Год выуска</div>
                        <input className="addPage__inp-box__inp-car__inp" value={carYearID}
                            onChange={(e) => setYearID(e.target.value)} type="text" disabled />
                    </div>
                    <div className="addPage__inp-box__inp-car" >
                        <div className="addPage__inp-box__inp-car__name"> Загрузка картинки</div>
                        <input   type="file" />
                    </div>
                </div>
            </div>
        </div>
    )
}
