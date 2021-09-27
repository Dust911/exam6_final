import Filter from "./components/Filter";
import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
      <div className = 'App'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <Filter />
      </div>
  );
}

export default App;
