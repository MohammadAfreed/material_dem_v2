export function  CustomTooltip(props) {
    var price = "";
    var date = "";
    if (props.data[props.label]) {
    price = props.data[props.label]["1. open"];
    date = props.data[props.label]["date"];
    }
    return (
    <div>
    <div >{date} </div>
    <div style={{ color: "rgb(0,200,5)"}}> $ {price}</div>
    </div>
    )
    }
