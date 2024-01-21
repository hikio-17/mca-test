import { FaHome } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import HeaderNav from './components/HeaderNav';

function App() {
  return (
    <div className='layout'>
      <Sidebar />

      <section className='main-section'>
        <HeaderNav />

        <main>
          <h1>Hello World</h1>
        </main>
      </section>
    </div>
  )
}

export default App;
