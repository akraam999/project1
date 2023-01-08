import logo from './logo.svg';
import './App.css';
import {NavBar} from './/Component/Nav'
import {Home} from './/Component/Home'
import {DetailProduit} from "./Component/DetailProduit";
import {Cart} from "./Component/Cart";
import './/font-awesome-4.7.0/css/font-awesome.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from './Component/Login'



function App() {
  return (
      <div>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/produit/:produitId" element={<DetailProduit />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
