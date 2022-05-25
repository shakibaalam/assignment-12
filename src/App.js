
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Pages/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import NotFound from './Pages/Shared/NotFound';
import Home from './Pages/Home/Home';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Blog from './Pages/Blog/Blog';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Dashboard/RequireAdmin';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import AllOrder from './Pages/Dashboard/AllOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import Products from './Pages/Products/Products';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';

function App() {
  return (
    <div className='container font-sans'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <PurchasePage></PurchasePage>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manage' element={<RequireAdmin>
            <ManageUsers></ManageUsers>
          </RequireAdmin>}></Route>
          <Route path='allOrder' element={<RequireAdmin>
            <AllOrder></AllOrder>
          </RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
