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


function App() {


  return (
    <>
      <div>
        <header className='header'>
          <div className='header__box'>
            <div className='header__box__link'>
              <NavLink to={'/'} >OFF-ROAD.KZ</NavLink>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Model" element={<Model />} />

        </Routes>
        {/* <div className="footer">sadsadasd</div> */}
      </div>
    </>
  )
}

export default App
