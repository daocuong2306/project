import Form from "./components/login/Form";
import Signin from "./components/login/Signin";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;

// closure
// currying
