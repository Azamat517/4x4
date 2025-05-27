import 'sass-reset'
import './sass/header.sass'
import './sass/body.sass'
import './sass/cars.sass'
import { NavLink, Route, Routes } from 'react-router-dom'
import Body from './page/body'
import './sass/tuning.sass'
import './sass/footer.sass'
import './sass/model.sass'
import Model from './page/model'
import CarModel from './page/carModel'
import './sass/carModel.sass'
import { AddPage } from './page/addPage'


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
          </div>

        </header>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/CarModel" element={<CarModel />} />
          <Route path="/AddPage" element={<AddPage />} />

        </Routes>
        {/* <div className="footer">sadsadasd</div> */}
      </div>
    </>
  )
}

export default App
