import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Routing from './Components/Routing/Routing';


const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  )
}

export default App