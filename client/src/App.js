import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/companies')
    .then(response => response.json())
    .then(data => console.log(data))
    
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
