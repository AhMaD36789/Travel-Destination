
import './App.css';
import Home from './Components/home/Home';
import db from './data/db.json';
function App() {
  return (
    <>


    <Home data={db} />

    
    </>
  );
}

export default App;
