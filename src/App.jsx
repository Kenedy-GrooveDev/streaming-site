import './css/App.css';
import NavBar from './components/NavBar';
import Favorites from './components/pages/Favorites';
import Home from './components/pages/Home'; 
import {Routes, Route} from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';


export default function App () {

  return (
    <>
      <MovieProvider>
        <NavBar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}