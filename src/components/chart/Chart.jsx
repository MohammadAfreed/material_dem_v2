import "./chart.scss"
import React,{useState,useEffect} from 'react';
import { LineChart, XAxis,Line, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from "../CustomtoolTip";

export const Chart = () => {
    const[error,setError]=useState(null);
    const[isLoaded,setIsLoaded]=useState(false);
    const [items,setItems]=useState([]);



    const data=[
      /*   {name: "January",Total:1200},
        {name: "February",Total:2200},
        {name: "March",Total:800},
        {name: "April",Total:1600},
        {name: "May",Total:900},
        {name: "June",Total:1800}, */
    ]
    useEffect(()=>{
      fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=OFLRZC5AN23W0O59").then(
        res=>res.json()
      ).then(
        (result)=> {
          for(var instance in result['Weekly Time Series']){
            var mydata=(result["Weekly Time Series"][instance])
            mydata.date=instance
            data.push(mydata)
          }
          setItems(data.reverse())
        },
        (error)=>{
          setIsLoaded(true);
          setError(error);
        }
      )
    },[])  


  return (
    <div className="chart">
        <div className="title">Six months revenue</div>
        <ResponsiveContainer width="100%" aspect={2}>
        <LineChart width={500} height={300} margin={{ top: 175, right: 30, left: 20, bottom: 5  }} data={items}>
        <Line dot={false}  type="monotone" dataKey="1. open" stroke="rgb(0,200,5)" yAxisId="100" />
        <Line dot={true} type="monotone" dataKey={"5. Volume"} stroke="rgb(0,300,5)" yAxisId="100"/>
        <XAxis id="1000"/>
          <Tooltip content={<CustomTooltip data={items} />} />
        </LineChart>
        </ResponsiveContainer>
       
    </div>
  )
}
