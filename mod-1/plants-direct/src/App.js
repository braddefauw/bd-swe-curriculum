import logo from './logo.svg';
import './App.css';
import data from './products.json';

function App() {
  return (
    <div className="App">
      {data.products.length} products
    </div>
  );
}

export default App;
