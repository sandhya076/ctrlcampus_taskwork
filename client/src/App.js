import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
import Register from "./Components/User/Registration.js";
import Login from "./Components/User/Login";


const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Routes>
                 <Route exact path="/"
                    element={<Home/>}/> 
                <Route exact path="/products/:category"
                element={<ProductList/>}/>
                 <Route path="/product/:id"
                    element={<Product/>}/>
               <Route path="/cart"
                    element={<Cart/>}/>
                    <Route path="/success"
       element =  {<Success />}/>
       <Route exact path="/register"
                    element={<Register/>}/> 
                    <Route exact path="/login"
                    element={<Login/>}/> 
        
                
            </Routes> 
        </Router>
    )
};

export default App;
