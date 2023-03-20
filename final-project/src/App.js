
import './App.css';
import { useEffect, useState } from 'react';
import { ItemCreate } from './components/ItemCreate';
import { UserCreate } from './components/UserCreate';
import { UserLogin } from './components/UserLogin';
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ItemDashboard } from './components/ItemsDashboard/ItemDashboard';
import { ItemDetails} from './components/ItemDetails/ItemDetails'

import {DetailedItemContext} from "./contexts/DetailedItemContext"
import { getOneItem } from './service/itemsService';
function App() {

  const navigate = useNavigate();
  const onBackHangler = () =>{
    navigate(-1)
  }

  const [auth, setAuth] = useState({})

  return (
    <>
    <Navigation />


    <Routes>
      <Route path='/' element = {<HomePage backingFunc = {onBackHangler} />} />


      {/* Users */}

      <Route path='/users/register' element = {<UserCreate backingFunc = {onBackHangler} />} />
      <Route path='/users/login' element = {<UserLogin backingFunc = {onBackHangler} />} />


      {/* Items */}

      <Route path='/articles/create' element = {<ItemCreate backingFunc = {onBackHangler} />} />
      <Route path='/articles/dashboard' element = {<ItemDashboard backingFunc = {onBackHangler} />} />

      <Route path='/articles/:id' element = {<ItemDetails />}/>
    </Routes>




    </>
  );
}

export default App;
