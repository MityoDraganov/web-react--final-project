
import './App.css';
import { ItemCreate } from './components/ItemCreate';
import { UserCreate } from './components/UserCreate';
import { UserLogin } from './components/UserLogin';
import {Routes, Route} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
function App() {
  return (
    <>
    <Navigation />

    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path='/users/register' element = {<UserCreate />} />
      <Route path='/users/login' element = {<UserLogin />} />
      <Route path='/item/create' element = {<ItemCreate />} />


    </Routes>

    </>
  );
}

export default App;
