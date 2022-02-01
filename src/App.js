import { BrowserRouter, Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import About from "./pages/About";
import Cart from "./pages/Cart";
import Discount from "./pages/Discount";
import Entertainment from "./pages/Entertainment";
import Favourites from "./pages/Favourites";
import Home from './pages/Home';


function App() {
  return (    
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
      <Footer />
      </BrowserRouter>      
  );
}

export default App;
