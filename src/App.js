import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import MyStocks from './Pages/MyStocks/MyStocks';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import UpdateStoke from './Pages/UpdateStoke/UpdateStoke';
import Login from './Pages/UserAccount/Login/Login';
import LogOut from './Pages/UserAccount/LogOut/LogOut';
import Register from './Pages/UserAccount/Register/Register';
import RequireAuth from './Pages/UserAccount/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        <Route path='/mystocks' element={<RequireAuth>
          <MyStocks></MyStocks>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>


        <Route path='/update/:id' element={<UpdateStoke></UpdateStoke>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
