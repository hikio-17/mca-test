import Sidebar from './components/Sidebar';
import HeaderNav from './components/HeaderNav';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SewingPage from './pages/SewingPage';

function App() {
  return (
    <div className='layout'>
      <Sidebar />
      <section className='main-section'>
        <HeaderNav />

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sewing' element={<SewingPage />} />
          </Routes>
        </main>
      </section>
    </div>
  )
}

export default App;
