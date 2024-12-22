import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Consulting from './Pages/Consulting';
import Design from './Pages/Design';
import Contact from "./Pages/Contact";
import Marketing from './Pages/Marketing';
import Products from "./Pages/Products";
import Services from './Pages/Services';
import Signup from './Pages/Signup';
const App = () => {
  return (
    <div>
      <Navbar/>
<Routes>
      <Route path ="/" element={<Home/>}></Route>
      <Route path="/consulting" element={<Consulting/>}/>
      <Route path="/design" element={<Design/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/marketing" element={<Marketing/>}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      
      </Routes>
    </div>
  )
}

export default App