
import axiosInstance from '../Helpers/axiosInstance';

export async function fetchCoinData({page=1,currency='usd'}) { // default currency=usd; and default page is 1;

    const per_page=10;
    
    
    try{
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}`);
console.log(response.data)
return response.data;
    }
    catch(error)
    {
console.log(error);
return null;
    }
}