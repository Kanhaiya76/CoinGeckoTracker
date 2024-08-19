import {Route,Routes} from 'react-router-dom'
import Home from '../../Pages/Home';
import CoinDetailsPage from '../../Pages/CoinDetailspage';
import MainLayout from '../../Pages/Layout';


function Routing(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>} >   
            <Route index element={<Home/>}  />                 {/*react router dom gives a prop called index like initial routes path="/"->index, path="/" also works but it may be confusing with  entry point-> mainlayout with page components */}

            <Route path="/details/:coinId" element={<CoinDetailsPage/>} />

            </Route>
        </Routes>
    )
}

export default Routing;