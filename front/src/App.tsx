import 'sass-reset'
import './sass/header.sass'
import './sass/body.sass'
import { NavLink } from 'react-router-dom'
import Body from './page/body'


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
        <Body/>
      </div>
    </>
  )
}

export default App
