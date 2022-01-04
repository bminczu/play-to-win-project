
import React from 'react'
import {Container} from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home.js";
import Auth from './components/Auth/Auth'



const App = () => {
    

    
    return (
        <BrowserRouter>
    <Container maxwidth="lg">
      <NavBar/>
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Home/>
    </Container>

        </BrowserRouter>
    );
}

export default App;