import './App.css';
import Content from './components/content/Content';
import NavBar from './components/navBar/NavBar';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='App-content'>

        <SideBar />


        < Content />

      </div>
    </div >
  );
}

export default App;
