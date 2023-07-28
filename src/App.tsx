import Signin from "./components/user/login/Signin";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./components/user/login/Signup";
import Dashboard from "./components/admin/dashboard";
import AddProduct from "./components/admin/addProduct";
import EditProduct from "./components/admin/editProduct";
import Product from "./components/user/product/Product";
import PriceFilter from "./demo/priceFilter";
import Cart from "./components/user/product/Cart";
import Details from "./components/user/product/Details";
import Header from "./components/layout/header";
import Search from "./components/layout/search";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route index element={<Signin />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="products" element={<Dashboard />}></Route>
        <Route path="user/products" element={<Product />}></Route>
        <Route path="edit/:id" element={<EditProduct />}></Route>
        <Route path="details/:slug" element={<Details />}></Route>
        <Route path="add" element={<AddProduct />}></Route>
        <Route path="filter" element={<PriceFilter />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="search" element={<Search />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// closure
// currying
