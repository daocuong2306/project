import Signin from "./components/login/Signin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./components/login/Signup";
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/signin" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;

// closure
// currying
