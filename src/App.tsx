import Signin from "./components/login/Signin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./components/login/Signup";
import Dashboard from "./components/admin/dashboard";
import AddProduct from "./components/admin/addProduct";
import EditProduct from "./components/admin/editProduct";
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/signin" element={<Signup/>}></Route>
            <Route path="/products" element={<Dashboard/>}></Route>
            <Route path="/edit/:id" element={<EditProduct/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            
        </Routes>
      </BrowserRouter>
    );
};

export default App;

// closure
// currying
