import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../home-page/HomePage'
export default function RouterPage() {

    return(
        <div>
            <BrowserRouter>
               <Routes>
                   <Route path='/' element={<HomePage/>}></Route>
               </Routes>
            </BrowserRouter>
        </div>
    )
}