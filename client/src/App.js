import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate, Form, useLocation} from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from './Base_url.js';
function App() {

  const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);


  const location = window.location;
  const getUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getuser`,{withCredentials:true});
      console.log("app response",response);
      setUser(response.data.user);
      setIsAuthorized(true);
      toast.success(response.data.message);
     
    } catch (error) {
      toast.success(error.response.data.message);
      setIsAuthorized(false);
      console.error('Error fetching user data:', error);

    }
  };
  
  useEffect(() => {
    getUser();
  }, [isAuthorized]);

  console.log("auth->",isAuthorized);
  console.log("user->",user);
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
       <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    <Toaster />
   </Router>
   </>
  );
}

export default App;
