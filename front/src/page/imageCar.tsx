
import { useLocation } from "react-router-dom";

const ImageCar = () => {
  const location = useLocation();
  const carModel = location.state;

  return (
    <div>
      <div className="imageCar">
        <div className="imageCar__box">
          <div className="imageCar__box__box-name">
            <div>{carModel.name_car}</div>
          </div>
          <div>{carModel.carYear.map((year: any) => (
            <div  key={year.id}>
              <div className="imageCar__box__year">{year.car_year}</div>
              <div className="imageCar__box__info">
                <div>{carModel.name_car}</div>
                <div className="imageCar__box__info__number">{year.body_number}</div>
              </div>
              <div className="imageCar__box-image"> {year.carModelImage.map((img: any) => (
                <div key={img.id}>
                  <img className="imageCar__box-image__image" src={img.image} alt="image" />
                </div>
              ))}</div>
            </div>
          ))}</div>
        </div>
      </div>
    </div>
  )
}

export default ImageCar