import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/'  element={<><Header /><Home /></>}/>
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
