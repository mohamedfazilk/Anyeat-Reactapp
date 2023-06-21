import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Addcart from "./Components/AddCart/Addcart";
import { CartProvider } from './Components/CartContext'
import { AuthProvider } from "./Components/AuthContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer/>
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <Addcart />
                </>
              }
            />

            <Route path="/product/:id" element={<>  <Header /><ProductDetails/></>}/>

            <Route path="/signup" element={<><Signup /></>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </AuthProvider>
        </CartProvider>
      </div>
    </Router>

  );
}

export default App;
