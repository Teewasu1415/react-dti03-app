import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Tablet from './pages/Tablet.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Smartphone from './pages/Smartphone.jsx'
import Notfound from './pages/Notfound.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tablet' element={<Tablet />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/smartphone' element={<Smartphone />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
