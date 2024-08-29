
import './App.css';
import { Home } from './page/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Read } from './page/Read';
import { AboutUs } from './page/AboutUs';
import { Shop } from './page/Shop';
import { ProductDetail } from './components/ProductDetail';
import { CreateProduct } from './components/CreateProduct';
import { Dashboard } from './page/Dashboard';
import { Login } from './page/Login';
import { SignUp } from './page/SignUp';
import { NotFound } from './page/NotFound';

function App() {

  return (
    <div className='container-fluid'>
      
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/product-detail/:id' element={<ProductDetail/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/show' element={<Dashboard/>}/>
          <Route path='/create' element={<CreateProduct edit={false} />}/>
          <Route path='/edit' element={<CreateProduct edit={true} />}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

function MainLayout(){
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
    
  ) 
}
