import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SobreNosPage from './pages/SobreNosPage';
import { Routes, Route } from 'react-router-dom';
import { FaleConosco } from './pages/FaleConoscoPage';

function App() {

  return (
    <>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/sobre' element={<SobreNosPage/>} />
          <Route path='/contato' element={<FaleConosco/>} />
        </Routes>
      </main>
      <hr />
      <Footer />
    </>
  )
}

export default App
