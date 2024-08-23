import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function CoinInfo({historicData,setDays,setCoininterval ,days ,currency}){



    const charDays=[
        {
          label:'24 Hours',
          value:1  
        },
        {
            label:'30 Days',
            value:30
        },
        {
            label:'90 Days',
            value:90
        },
        {
            label:'365 Days',
            value:365
        }
    ]

    function HandleDayChange(e){
        console.log(e.target.options[e.target.selectedIndex].value);
        const daysSelected=e.target.options[e.target.selectedIndex].value
      

        if(daysSelected==1){
            setCoininterval('hourly');

        }else{
            setDays(e.target.options[e.target.selectedIndex].value)
        }
    }

    Chart.register(CategoryScale)

    if(!historicData){
        return <div>No data available</div>
    }

    return (
        <div
        className="flex flex-col items-center justify-center mt-6  w-full md:w-2/3"
        >

<div className="h-[500px]" >
<Line

data ={{
    labels:historicData.prices.map(coinPrice=>{
            let date = new Date(coinPrice[0]);
            let time = date.getHours() >12 ? `${date.getHours()-12}:${date.getMinutes()}PM`:`${date.getHours()}:${date.getMinutes()}AM`
            return days == 1 ? time : date.toLocaleDateString();
        }),
   
    datasets:[
        {
            label: `price  (past ${days} ${days===1 ? 'day': 'days'})  in ${currency.toUpperCase()}`,
            data:historicData.prices.map(coinPrice => coinPrice[1]),
        }
     ],
    
}}

 options={
    {
        responsive:true,
        maintainAspectRatio:false,
        elements:{
            point:{
                radius:0
            }
        }
    }
 }

/>
</div>

<div className="flex justify-center mt-5 w-full">

<select className="select select-info w-full max-w-xs" onChange={HandleDayChange} >
{charDays.map((day,index)=>{
    return (
        <option selected={days == day.value} key={index} value={day.value}  > {day.label}</option>
    )
})}
</select>


</div>

        </div>
    )
}

export default CoinInfo;