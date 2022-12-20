import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar.jsx'
import {Navbar} from '../../components/navbar/Navbar'
import "./home.scss"
import { Widgets } from '../../components/widgets/Widgets.jsx'
import Featured from '../../components/featured/Featured.jsx'
import { Chart } from '../../components/chart/Chart.jsx'
import List from "../../components/table/Table"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
            <Navbar/>
            <div className="widgets">
              <Widgets type="user"/>
              <Widgets type="order"/>
              <Widgets type="earaning"/>
              <Widgets type="balance"/>
              
            </div>
            <div className='charts'>
               <Featured/>
               <Chart/>

            </div>
            <div className="listContainer">
              <div className="listTitle">Latest transactions</div>
              <List/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
