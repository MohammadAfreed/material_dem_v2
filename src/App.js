
import { Button, Typography } from '@mui/material';
import { Settings,Add } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Home from './pages/home/Home';
import List from './pages/list/List';
import {Login} from './pages/login/Login.jsx';
import Single1 from './pages/single/Single';
import "../src/pages/style/dark.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single1/>}/>
            <Route path="new" element={<New/>}/>
            
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
    </div>
  
  );
}

export default App;
