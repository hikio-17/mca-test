import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='layout'>
      <Sidebar />

      <section className='main-section'>
        <div className="main-section__header-nav">
          Header Nav
        </div>

        <main>
          <h1>Hello World</h1>
        </main>
      </section>
    </div>
  )
}

export default App;
