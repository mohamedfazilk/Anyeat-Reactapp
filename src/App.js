import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Addcart from "./Components/AddCart/Addcart";
import { CartProvider } from './Components/CartContext'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <CartProvider>
        <Routes>
        <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
         
          <Route path='/'  element={<><Header/><Home /></>}/>
          <Route path='/cart' element={<Addcart/>}/>
        </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
