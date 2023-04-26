
import './App.css';
import Home from './Components/home/Home';
import db from './data/db.json';
import { Routes,Route } from 'react-router-dom';
import TourDetails from './Components/TourDetails/TourDetails';

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home data={db} />}></Route>
          <Route path="/city/:id" element={<TourDetails data ={db}/>}></Route>
        </Routes>

    
    </>
  );
}

export default App;
