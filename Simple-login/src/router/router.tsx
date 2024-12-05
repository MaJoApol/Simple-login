import Login from "../pages/login";
import {BrowserRouter, Route, Routes} from "react-router-dom"

export default function Routers(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="LogIn" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
)}