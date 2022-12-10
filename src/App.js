import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Form/Login';
import RequireAuth from './components/Form/RequireAuth';
import Signup from './components/Form/Signup';
import Header from './components/Header/Header';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/user' element={<RequireAuth><User></User></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
