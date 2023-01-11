import { KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} 
            />

        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$400</p>
        <p className="desc">Previos Transactions</p>
        <div className="summary">
            <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlined fontSize="small"/>
            <div className="resultAmount">$15</div>
            </div>
            
            </div>
            
            
            <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
            <KeyboardArrowUpOutlined fontSize="small"/>
            <div className="resultAmount">$15</div>
            </div>
            </div>
            <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlined fontSize="small"/>
            <div className="resultAmount">$15</div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Featured
