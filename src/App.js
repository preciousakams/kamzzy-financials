import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
// import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="details" element={<Details />} /> */}
      </Routes>
    </div>
  );
}

export default App;
