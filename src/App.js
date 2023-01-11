
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import New from './pages/new/New';
import Home from './pages/home/Home';
import List from './pages/list/List';
import {Login} from './pages/login/Login.jsx';
import Single from './pages/single/Single';
import "../src/pages/style/dark.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { productInputs, userInputs } from './formSource';
import Product from './pages/product/Product';
import ProductList from './pages/productlist/ProductList';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            
          </Route>
          
          <Route path="products">
              <Route index element={<ProductList/>} />
              <Route path=":productId" element={<Product/>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
        </Route>

      </Routes>

    </BrowserRouter>
    </div>
  
  );
}

export default App;
