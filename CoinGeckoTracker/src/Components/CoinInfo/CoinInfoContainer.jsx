import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PageLoader from "../../PageLoader/PageLoader";
import { fetchCoinHistoricData } from "../../Services/fetchCoinHistoricdata";
import currencyStore from "../../State/Store";
import CoinInfo from "./CoinInfo";


function CoinInfoContainer({coinId}){

    const {currency}= currencyStore();
    const [days,setDays]= useState(7)
    const [interval,setCoininterval]= useState('daily')

    const {data:historicData, isLoading, isError} = useQuery({
        queryKey:['coinHistoricData',coinId,currency,days],
        queryFn:()=>fetchCoinHistoricData(coinId, interval , days, currency),

        cacheTime: 1000 * 60 * 2,
        staleTime:1000*60*2,
    })

    if(isLoading){
        return <PageLoader/>
    }
    if(isError){
        return <div>Chart error </div>
    }

    return (
        <div>
<CoinInfo historicData={historicData}
 setDays={setDays} 
 days={days}
 currency={currency}
 setCoininterval={setCoininterval} />
        </div>
    )
}

export default CoinInfoContainer;