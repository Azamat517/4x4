import 'sass-reset'
import './sass/header.sass'
import './sass/body.sass'
import './sass/cars.sass'
import { NavLink, Route, Routes } from 'react-router-dom'
import Body from './page/body'
import './sass/tuning.sass'
import './sass/comparison.sass'
import './sass/footer.sass'
import './sass/model.sass'
import './sass/infoCar.sass'
import Model from './page/model'
import CarModel from './page/carModel'
import './sass/carModel.sass'
import './sass/imageCar.sass'
import './sass/addPage.sass'
import { AddPage } from './page/addPage'
import ImageCar from './page/imageCar'
import TuningPart from './page/tuningPart'
import InfoCar from './page/infoCar'
import Comparison from './comparison'


function App() {


  return (
    <>
      <div>
        <header className='header'>
          <div className='header__box'>

            <div className='header__box__link'>
              <NavLink to={'/'} >OFF-ROAD.KZ</NavLink>

            </div>
            <NavLink to={'/AddPage'} className='header__nav'>Добавить свой джип</NavLink>
            <NavLink to={'/Comparison'} className='header__nav'>Сравнить джип</NavLink>
          </div>


        </header>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/CarModel" element={<CarModel />} />
          <Route path="/AddPage" element={<AddPage />} />
          <Route path="/ImageCar" element={<ImageCar />} />
          <Route path="/Comparison" element={<Comparison />} />
          <Route path="/TuningPart" element={<TuningPart />} />
          <Route path="/InfoCar" element={<InfoCar />} />
        </Routes>
        {/* <div className="footer">sadsadasd</div> */}
      </div>
    </>
  )
}

export default App
