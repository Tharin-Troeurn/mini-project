
import './App.css';
import { Home } from './page/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Read } from './page/Read';
import { AboutUs } from './page/AboutUs';
import { Shop } from './page/Shop';

function App() {
  // console.log(products)
  // const data = products
  // const fetchProduct = () =>{
  //   fetch(data)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  // useEffect(()=>{
  //   fetchProduct()
  // },[])


  return (

    <div className='container-fluid'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
