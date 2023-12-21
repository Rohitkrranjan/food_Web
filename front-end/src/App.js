
import './App.css';
import Registration from './components/Registration';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Staff from './components/Staff';
import Nav from './nav';
import UpdateProduct from './components/Updateproduct';
import Signup from './components/Signup';
import LoginAdmin from './components/LoginAdmin';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Staff/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login-admin' element={<LoginAdmin/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
  
      </BrowserRouter>

      
    </div>
  );
}

export default App;
