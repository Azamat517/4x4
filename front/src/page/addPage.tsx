import { useEffect, useState } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";


export const AddPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);

    const [carMake, setCarMake] = useState('')
    const [carID, setID] = useState('')


    useEffect(() => {
        dispatch(getModel());

    }, [dispatch]);


    return (
        <div>
            <div className="addPage">
                <div className="addPage__box">{cars.carInfo.map((i, index) => (
                    <button className="" key={index}
                        onClick={() => {
                            setCarMake(i.name_model,)
                            setID(i.id)
                        }} >
                        <div className="addPage__box__box__name">{i.name_model}</div>
                        <img className="addPage__box__box__image" src={i.image_model} alt="image" />
                    </button>

                ))}</div>
                <div className="addPage__inp-box">
                    <div className="addPage__inp-box__inp-car">
                        <div>Марка машины</div>
                        <input value={carMake} onChange={(e) => setCarMake(e.target.value)} type="text" />
                    </div>
                    <div className="addPage__inp-box__inp-car">
                        <div>ID машины</div>
                        <input value={carID} onChange={(e) => setID(e.target.value)} type="text" />
                    </div>
                </div>
            </div>

        </div>
    )
}
