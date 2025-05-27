import { useEffect } from "react";
import { getModel, model } from "../features/modelSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";


export const AddPage = () => {

  const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector(model);



    useEffect(() => {
        dispatch(getModel());
   
    }, [dispatch]);


    return (
        <div>
            <div>{cars.carInfo.map((i, index)=> (
                <div key={index}>{i.name_model}</div>
            ))}</div>
        </div>
    )
}
