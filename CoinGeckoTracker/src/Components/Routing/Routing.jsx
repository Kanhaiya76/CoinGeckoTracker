import {Route,Routes} from 'react-router-dom'
// import Home from '../../Pages/Home';
// import CoinDetailsPage from '../../Pages/CoinDetailspage';
import MainLayout from '../../Pages/Layout';
import { lazy, Suspense } from 'react';
import PageLoader from '../../PageLoader/PageLoader'

const Home = lazy(()=> import('../../Pages/Home'))
const CoinDetailsPage=lazy(()=> import('../../Pages/CoinDetailsPage'));


function Routing(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>} >   
            <Route index element={
                
               <Suspense fallback={<div><PageLoader /></div>}>
                 <Home/>
               </Suspense>
                
                }  />                 {/*react router dom gives a prop called index like initial routes path="/"->index, path="/" also works but it may be confusing with  entry point-> mainlayout with page components */}

            <Route path="/details/:coinId" element={

               
                <Suspense fallback={<PageLoader />}> {/* suspense-> <Suspense> lets you display a fallback until its children have finished loading. */}
                     <CoinDetailsPage/>
                </Suspense>
                
                } />   {/* : tells us this is not a static part of url it is dynamic part of url  and with the help of usearam we can fetch the exact   key that you mention along with the colon */}

            </Route>
        </Routes>
    )
}

export default Routing;