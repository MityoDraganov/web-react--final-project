
  import './App.css';
  import { useEffect, useState } from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { UserCreate } from './components/UserCreate/UserCreate';
  import { UserLogin } from './components/UserLogin/UserLogin';
  import { UserLogout } from './components/UserLogout/UserLogout';


  import { ItemCreate } from './components/ItemCreate/ItemCreate';
  import {Routes, Route, useNavigate} from 'react-router-dom'
  import { Navigation } from './components/Navigation/Navigation';
  import { HomePage } from './components/HomePage/HomePage';
  import { ItemDashboard } from './components/ItemsDashboard/ItemDashboard';
  import { ItemDetails} from './components/ItemDetails/ItemDetails'
  import { ItemEdit } from './components/ItemEdit/ItemEdit';
  import { ItemDelete } from './components/ItemDelete/ItemDelete';
  import { MyArticles } from './components/MyArticles/MyArticles';


  import { AuthContext } from './contexts/AuthContext';
  import { NavContext } from './contexts/NavContext';
  import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute"
  import { WriteComment } from './components/WriteComment/WriteComment';
  import { CommentEdit } from './components/CommentEdit/CommentEdit';
  import { CommentDelete } from './components/CommentDelete/CommentDelete';


  function App() {


    const navigate = useNavigate();
    const onBackHangler = () =>{
      navigate(-1)
    }

    const [auth, setAuth] = useState({
      _id: null,
      token: null,
    })

    useEffect(() =>{
      if(localStorage.getItem("user") !== null){
        const dataJSON = localStorage.getItem("user")
        const data = JSON.parse(dataJSON)
        setAuth(state => ({...state, token: data.token, _id: data._id}))
      }
    }, [])
    

    const authContextValues = {
      setAuth,
      userId: auth._id,
      token: auth.token,
      isAuthenticated: !!auth.token,
    };
    const navContextValue = {
      navigate,
      onBackHangler
    }



    return (
      <>
      <NavContext.Provider value={navContextValue} >
      <AuthContext.Provider value={authContextValues}>
        <ToastContainer></ToastContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Users */}
          <Route path="/users/register" element={<UserCreate />} />
          <Route path="/users/login" element={<UserLogin />} />


          <Route path="/users/logout" element={<PrivateRoute component={UserLogout} />} />


          {/* Items */}
          <Route path="/articles/:id" element={<ItemDetails />} />
          <Route path="/articles/dashboard" element={<ItemDashboard />} />


          <Route path="/articles/create" element={<PrivateRoute component={ItemCreate}/>} />
          <Route path="/articles/edit/:id" element={<PrivateRoute component={ItemEdit} />} />
          <Route path="/articles/delete/:id" element={<PrivateRoute component={ItemDelete} />} />

          <Route path="/articles/MyArticles/:id" element={<PrivateRoute component={MyArticles} />} />

          <Route path="/articles/writeComment/:id" element={<PrivateRoute component={WriteComment} />} />
          <Route path="/comments/edit/:id" element={<PrivateRoute component={CommentEdit} />} />
          <Route path="/comments/delete/:id" element={<PrivateRoute component={CommentDelete} />} />
        </Routes> 
      </AuthContext.Provider>
      </NavContext.Provider>



      </>
    );
  }

  export default App;
