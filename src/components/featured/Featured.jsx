import { KeyboardArrowDown, KeyboardArrowUp, KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "./featured.scss";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
            <CircularProgressbar value={70} text={"70%"} styles={
                buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199)`,
                    textColor: 'rgba(62, 152, 199)',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })
            }/>

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
