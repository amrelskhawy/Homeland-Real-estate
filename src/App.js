import './App.css';


import Home from './pages/Home'
import { PropertyDetails } from './pages/PropertyDetails';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'


function App() {
    return (
        <div className='bg-white max-w-[1440px] m-auto'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/property/:id' element={<PropertyDetails />} />
            </Routes>
            <Footer />
        
        </div>
    );
}

export default App;
