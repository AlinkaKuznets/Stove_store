import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage';
import ShopCategory from './components/pages/ShopCategory';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart'
import LoginSignup from './components/pages/LoginSignup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/пицца' element={<ShopCategory category='пицца' />} />
          <Route path='/вок' element={<ShopCategory category='вок' />} />
          <Route path='/шаурма' element={<ShopCategory category='шаурма' />} />
          <Route path='/закуски' element={<ShopCategory category='закуски' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
