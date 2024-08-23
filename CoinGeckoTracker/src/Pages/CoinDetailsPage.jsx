import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/FetchCoinDetails";
import currencyStore from "../State/Store";
// import { useEffect } from "react";

import parse from 'html-react-parser';
import CoinInfoContainer from "../Components/CoinInfo/CoinInfoContainer";
import PageLoader from "../PageLoader/PageLoader";

function CoinDetailsPage(){

    const {currency}= currencyStore()

    const {coinId}=useParams()

 const {isError,isLoading,data:coin} =  useQuery({
        queryKey:["coin",coinId],
        queryFn:()=>fetchCoinDetails(coinId),

        cacheTime:1000*60*2,  
        staleTime:1000*60*2 
    })
    // useEffect(()=>{
    //     console.log(coin)
    // },[coin])

    if(isLoading){
        return <PageLoader/>
    }
    if(isError){
        return <div>Error: something went wrong</div>
    }


   
    return (

      <div className="flex flex-col md:flex-row ">
<div 
className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-600"
>
    <img 
    alt={coin?.name}
    src={coin?. image?. large}
    className="h-52 mb-5"
    />

    <h1 className="text-4xl font-bold mb-5">
        {coin?.name}
    </h1>

    <p className="w-full px-6 py-4 text-justify ">
        {parse(coin?.description?.en)}           {/* html parser convert the html tags and links into paragraph only ,but links will work */}
    </p>

    <div className="w-full flex flex-col md:flex-row md:justify-around" >
<div className="flex items-center mb-4 md:mb-0">
<h2 className="text-xl font-bold">rank</h2>

<span className="ml-3 text-xl">

{coin?.market_cap_rank}

</span>
</div>

<div className="flex items-center mb-4 md:mb-0">

<h2 className="text-xl text-yellow-500 font-bold"> current Price</h2>

<span className="ml-3 text-xl">

{coin?.market_data.current_price[currency]}

</span>
</div>

    </div>
</div>

<div className="md:w-2/3 w-full p-6">
    
    <CoinInfoContainer coinId={coinId}  />
</div>

      </div>
    )
}
export  default CoinDetailsPage;