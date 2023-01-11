import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import "./navbar.scss"

export const Navbar = () => {
  const {dispatch}=useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='search'/>
          <Search className='icon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' onClick={()=>dispatch({type: "TOGGLE"})}/>
         
          </div>
          <div className='item'>
            <FullscreenExitOutlined className='icon'/>
            
          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon'/>
            <div className='counter'>1</div>  
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon'/>
            <div className='counter'>2</div> 
          </div>
          <div className='item'>
            <ListOutlined className='icon'/>
          </div>
          <div className='item'>
            <img src='https://images.pexels.com/photos/1280162/pexels-photo-1280162.jpeg'
            alt=''
            className='avatar'
            />
          </div>
        </div>
      </div>

    </div>
  )
}
