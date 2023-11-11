import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ItemDetails from './components/ItemDetails';
import KultureJacketsCollections from './components/KultureJacketsCollections';
import KultureCargoPantsCollections from './components/KultureCargoPants';
import Kulture2PieceCollections from './components/Kulture2PieceCollections';
import KultureShirtCollections from './components/KultureShirtCollections';
import Footer from '../src/components/Footer'
import Cart from './components/Cart';
import NotFound from './components/NotFoundComponent';
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Navbar />
    <ToastContainer />
    
    </header>
    <Routes>
       <Route path="/" element={<LandingPage/>} /> 
       <Route path="/collections/kulture-jacket" element={<KultureJacketsCollections/>} /> 
       <Route path="/collections/kulture-cargo-pants" element={<KultureCargoPantsCollections/>} /> 
       <Route path="/collections/kulture-2-piece" element={<Kulture2PieceCollections/>} /> 
       <Route path="/collections/kulture-shirt" element={<KultureShirtCollections/>} /> 
       <Route path="/cart" element={<Cart/>} /> 
       <Route path="*" element={<NotFound />} />
     
       <Route path="item/:itemId" element={<ItemDetails/>} /> 

     
      {/* <Route path="/cart" element={<Cart cart={cart} />} /> */}
   
    </Routes>
     <Footer /> 
  </div>
  );
}

export default App;
