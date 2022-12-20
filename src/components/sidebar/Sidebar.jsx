import React, { useContext } from 'react';
import "./sidebar.scss";
import { Dashboard, Person2Outlined, Article,Home,Settings,Storefront,Logout,LocalShipping } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
export const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext);
  return (

    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Admin</span>
        </Link>
        
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <Link to="/" style={{textDecoration:"none"}}>
          <li><Dashboard className='icon'/><span>Dashboard</span></li>
          </Link>
          
          <Link to="/users" style={{textDecoration:"none"}}>
            <li><Person2Outlined className='icon'/><span>Users</span></li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li><Storefront className='icon'/><span>Products</span></li>
          </Link>
          
          <li><Storefront className='icon'/><span>Orders</span></li>
          <li><LocalShipping className='icon'/><span>Delivery</span></li>
          <li><Article className='icon'/><span>Stats</span></li>
          <li><Article className='icon'/><span>Notifications</span></li>
          <li><Settings className='icon'/><span>Settings</span></li>
          <li><Home className='icon'/><span>Profile</span></li>
          <li><Logout className='icon'/><span>Logout</span></li>
        </ul>

      </div>
      <div className='button'>
        <div className='colorOption'
          onClick={()=>dispatch({type:'LIGHT'})}></div>
        <div className='colorOption'
         onClick={()=>dispatch({type:'DARK'})}></div>
        
      </div>

    </div>
  )
}
