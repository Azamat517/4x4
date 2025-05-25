import { useEffect } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";


const Body = () => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);
    console.log(cars.carInfo);



    useEffect(() => {
        dispatch(getModel());
    }, [dispatch]);

    return (
        <div className="body">
            <div className="body__box">
                <div className="body__box__home">
                    <div >
                        <img className="body__box__home__image" src={'src/assets/1.jpg'} alt="image" />
                    </div>
                    <div>
                        <div>
                            <div className="tuning">Off-road tuning</div>
                        </div>
                        <div className="tuning__box">asdasd</div>
                    </div>
                </div>
                <div className="cars">{cars.carInfo.map((i, index) => (
                    <div className="cars__box" key={index}>
                        <div>{i.name_model}</div>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}

export default Body