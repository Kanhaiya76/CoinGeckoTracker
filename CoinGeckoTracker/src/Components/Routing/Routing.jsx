import {Route,Routes} from 'react-router-dom'
import Home from '../../Pages/Home';
import CoinDetailsPage from '../../Pages/CoinDetailspage';
import MainLayout from '../../Pages/Layout';


function Routing(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>} >   
            <Route index element={<Home/>}  />                 {/*react router dom gives a prop called index like initial routes path="/"->index, path="/" also works but it may be confusing with  entry point-> mainlayout with page components */}

            <Route path="/details/:coinId" element={<CoinDetailsPage/>} />  {/* : tells us this is not a static part of url it is dynamic part of url  and with the help of usearam we can fetch the exact key that you mention along with the colon */}

            </Route>
        </Routes>
    )
}

export default Routing;