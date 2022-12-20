import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./widgets.scss"

export const Widgets = ({type}) => {
    let data;
    const amount=100;
    const diff =20;
        switch(type){
            case "user":
                data={
                    title:"Users",
                    isMoney:false,
                    link:"See all Users",
                    icon:<Person2Outlined className="icon" style={{color:"crimson",
                    backgroundColor:"rgba(255,0,0,0.2)"}}/>,
                };
                break;
            case "order":
                data={
                    title:"Orders",
                    isMoney:false,
                    link:"Veiw All Orders",
                    icon:<ShoppingCartOutlined className="icon" style={{color:"goldenred",
                    backgroundColor:"rgba(218,165,32,0.2)"}}/>,
                };
                break;
            case "earaning":
                data={
                    title:"Earnings",
                    isMoney:true,
                    link:"Veiw Net Earnings",
                    icon:<MonetizationOnOutlined className="icon" style={{color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"}}/>,
                };
                break;
            case "balance":
                data={
                    title:"Balance",
                    isMoney:true,
                    link:"See details",
                    icon:<AccountBalanceOutlined className="icon" style={{color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)"}}/>,
                };
                break;
                default:
                break;
        }





  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive" >
                <KeyboardArrowUp/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}
