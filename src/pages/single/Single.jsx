import "./single.scss"
import {Navbar} from "../../components/navbar/Navbar"
import {Sidebar} from "../../components/sidebar/Sidebar"
import {Chart} from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" className="itemImg" />
              
              <div className="details">
                <h1 className="itemTitle">Emma</h1>
                <div className="detailItem">
                  <span className="Itemkey">Email :</span>
                  <span className="Itemvalue">dummy@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="Itemkey">Phone:</span>
                  <span className="Itemvalue">+91 7648236482</span>
                </div>
                <div className="detailItem">
                  <span className="Itemkey">Address:</span>
                  <span className="Itemvalue">delhi, India</span>
                </div>
                <div className="detailItem">
                  <span className="Itemkey">Country :</span>
                  <span className="Itemvalue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart/>
          </div>
        </div>
        <div className="bottom">
          <List/>
        </div>
      </div>
      
    </div>
  )
}

export default Single
