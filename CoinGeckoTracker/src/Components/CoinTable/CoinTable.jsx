import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
// import { CurrencyContext } from '../../Context/CurrencyContext';
import currencyStore from '../../State/Store'
import { fetchCoinData } from '../../Services/fetchCoinData';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../../PageLoader/PageLoader';




function CoinTable(){

   const {currency}= currencyStore()

const navigate = useNavigate()


    const [page,setPage] = useState(1);

    const {data,isLoading,isError,error } = useQuery({
        queryKey: ['coins',page,currency],
        queryFn: () =>
        fetchCoinData({page,currency}),
    
    //    retry:2,
    //    retryDelay:1000,
    cacheTime:1000*60*2,  //this will cache data for a time and make api call in parallel;
    staleTime:1000*60*2   //(how long your data to be fresh) if your data is fresh then it will not make an api call;

    
    })  
        

    function handleCoinRedirect(id){
navigate(`/details/${id}`)
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    if(isLoading){
        return <PageLoader/>
    }

if(isError){
    return <div>Error:{error.message}</div>
}



    return (

<div>
<div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto " >

<div className='w-full bg-orange-500 text-black flex py-4 font-semibold items-center'>

<div className='basis-[35%]' >
    coin
</div>
<div className='basis-[25%]' >
    price
</div>

<div className='basis-[20%]' >
    24h change
</div  >

<div className='basis-[20%]' >
    market cap
</div>
</div>

<div className='flex flex-col w-[80vw] mx-auto' >
    
{ data && data.map((coin)=> {
    

        return (
            <div onClick={()=>handleCoinRedirect(coin.id)} key={coin.id} className='w-full bg-transparent text-white flex py-4 px-2 cursor-pointer font-semibold items-center justify-between' >

                <div className='flex items-center justify-start gap-3 basis-[35%]'>
                    <div className='w-[5rem] h-[5rem] '>
                        <img src={coin.image} className='w-full h-full '/>
                    </div>
<div className='flex flex-col'>
    <div className='text-3xl' >{coin.name} </div>
    <div className='text-xl'>{coin.symbol} </div>
</div>

                </div>


                <div className='basis-[25%]'>
                    {coin.high_24h}

                </div>

                <div className='basis-[20%]'>
                    {coin.price_change_24h}
                </div>

                <div className='basis-[20%]'>
                    {coin.market_cap}
                </div>
            </div>
        )
    })
}

</div>



</div>

<div className='flex gap-4 justify-center items-center'>
    <button
    disabled={page===1}
    onClick={()=>setPage(page-1)} 
    className="btn btn-primary btn-wide text-white text-2xl">
        Prev
        </button>

    <button
    onClick={()=>setPage(page+1)} 
    className= 'btn btn-secondary btn-wide text-white text-2xl'>
        Next
        </button>
</div>


</div>

    )
}

export default CoinTable;
