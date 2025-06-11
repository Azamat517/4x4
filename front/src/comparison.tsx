import { useEffect, useState } from "react";
import { getModel, model } from "./features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./redux/store";


const Comparison = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);
    const [carMake, setCarMake] = useState('')
    const [carMakes, setCarMakes] = useState('')
    // const [carID, setID] = useState('')
    // const [carModels, setCarModels] = useState<any[]>([]);
    const [test, setTest] = useState(false)
    useEffect(() => {
        dispatch(getModel());
    }, [dispatch]);

    function models() {
        setTest(!test);
    }

    return (
        <div >
            <div className="comparison">
                <div className="comparison__box">
                    <div className="comparison__box__image">{cars.carInfo.map((i, index) => (
                        <button key={index}
                            onClick={() => {
                                setCarMake(i.name_model,)
                                // setID(i.id)
                                // setCarModels(i.carModel || []);
                                models()
                            }} >
                            <div className="comparison__box__image__name" >{i.name_model}</div>
                        <img  className="comparison__box__image__image" src={i.image_model} alt="image" />
                        </button>
                    ))}
                    </div>
                     <div className="comparison__box__image">{cars.carInfo.map((i, index) => (
                        <button key={index}
                            onClick={() => {
                                setCarMakes(i.name_model,)
                                // setID(i.id)
                                // setCarModels(i.carModel || []);
                                models()
                            }} >
                            <div className="comparison__box__image__name" >{i.name_model}</div>
                        <img  className="comparison__box__image__image" src={i.image_model} alt="image" />
                        </button>
                    ))}
                    </div>
                </div>

                <div className="comparison__test-car">
                    <button className="comparison__test-car__cars">{carMake}</button>
                    <button className="comparison__test-car__cars">{carMakes}</button>
                </div>
            </div>

        </div>
    )
}

export default Comparison