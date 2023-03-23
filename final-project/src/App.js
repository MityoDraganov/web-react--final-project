
import './App.css';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';


import { UserCreate } from './components/UserCreate';
import { UserLogin } from './components/UserLogin';
import { UserLogout } from './components/UserLogout/UserLogout';


import { ItemCreate } from './components/ItemCreate';
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ItemDashboard } from './components/ItemsDashboard/ItemDashboard';
import { ItemDetails} from './components/ItemDetails/ItemDetails'
import { ItemEdit } from './components/ItemEdit/ItemEdit';
import { ItemDelete } from './components/ItemDelete/ItemDelete';


import {DetailedItemContext} from "./contexts/DetailedItemContext"
import { getOneItem } from './service/itemsService';

import { AuthContext } from './contexts/AuthContext';

import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute"

function App() {


  const navigate = useNavigate();
  const onBackHangler = () =>{
    navigate(-1)
  }

  const [auth, setAuth] = useState({
    _id: null,
    token: null,
  })

  const contextValues = {
    setAuth,
    userId: auth._id,
    token: auth.token,
    isAuthenticated: !!auth.token,
  };

  const isAuthorized = () =>{

  }


  return (
    <>

    <AuthContext.Provider value={contextValues}>
      <ToastContainer></ToastContainer>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage backingFunc={onBackHangler} />} />

        {/* Users */}
        <Route path="/users/register" element={<UserCreate backingFunc={onBackHangler} />} />
        <Route path="/users/login" element={<UserLogin backingFunc={onBackHangler} />} />
        <Route path="/users/logout" element={<UserLogout history={navigate} />} />

        {/* Items */}
        <Route path="/articles/:id" element={<ItemDetails />} />

        <Route path="/articles/create" element={<PrivateRoute component={ItemCreate}/>} />
        <Route path="/articles/dashboard" element={<ItemDashboard backingFunc={onBackHangler} />} />
        <Route path="/articles/edit/:id" element={<ItemEdit backingFunc={onBackHangler} />} />
        <Route path="/articles/delete/:id" element={<ItemDelete backingFunc={onBackHangler} />} />

      </Routes>
    </AuthContext.Provider>




    </>
  );
}

export default App;
