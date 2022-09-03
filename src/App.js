import React, {useReducer, createContext} from 'react'
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";

import { initialState, reducer } from "../src/reducer/UseReducer";


// we create a contextAPI 
export const UserContext = createContext();


const Routing = () => {
  
  return (
    <>
    <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/about" element={<About/>} />
               <Route  exact path="/contact" element={<Contact/>} />
               <Route exact path="/login" element={<Login/>} />
               <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/logout" element={<Logout/>} />
               <Route path="*" element={<ErrorPage/>} /> 
     </Routes>
    </>
  );
};

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}

export default App;


























