import { useLocation } from "react-router-dom";


const InfoCar = () => {
    const location = useLocation();
    const { name_car, body_number } = location.state || {};

    return (
        <div>
          <div className="infoCar">
              <div >{name_car}</div>
            <div>{body_number}</div>
          </div>
        </div>
    );
};

export default InfoCar;