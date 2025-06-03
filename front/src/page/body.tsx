import { useEffect } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { getTuning, tuning } from "../features/tuningSlicae";
import { useNavigate } from "react-router-dom";


const Body = () => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);
    const tun = useSelector(tuning);


    useEffect(() => {
        dispatch(getModel());
        dispatch(getTuning());
    }, [dispatch]);


    const navigate = useNavigate();

    return (
        <div className="body">
            <div className="body__box">
                <div className="body__box__home">
                    <div >
                        <div className="body__box__home__name">4X4</div>

                        <img className="body__box__home__image" src={'src/assets/1.jpg'} alt="image" />

                    </div>
                    <div>
                        <div className="tuning">
                            <div className="tuning__name">Off-road tuning</div>
                            <div className="tuning__box">{tun.tuning.map((t, index) => (
                                <div key={index} >
                                    <div className="tuning__box__box">
                                        <img className="tuning__box__box__image" src={t.image_tunning} alt="image" />
                                        <div className="tuning__box__box__name">{t.name_tuning}</div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cars">{cars.carInfo.map((i, index) => (
                    <button key={index} className="cars__box"
                        onClick={() => navigate('/CarModel', { state: i })} >{i.name_model}
                        <img className="cars__box__image" src={i.image_model} alt="image" />
                    </button>
                ))}</div>
            </div>

        </div>

    )
}

export default Body