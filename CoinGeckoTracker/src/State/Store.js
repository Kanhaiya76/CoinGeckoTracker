import { create } from "zustand";


const currencyStore = create((set)=>({
    currency:'usd',
    setcurrency:(newcurrency)=>set((state)=>{
        return{
            ...state,
            currency:newcurrency
        }
    })
}))

export default currencyStore;