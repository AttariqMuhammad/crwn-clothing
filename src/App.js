import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.component';
import Home from './routes/Home/Home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/Shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} > 
      <Route index element={<Home />} />
      <Route path='authentication' element={<Authentication />}></Route>
      <Route path='shop' element={<Shop />} /> 
      <Route path='checkout' element={<Checkout />} /> 
      </Route>
    </Routes>
  );
}

export default App;
