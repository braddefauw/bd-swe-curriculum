import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ItemContainer } from './itemContainer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const sauceList = ['Sriracha', 'Tobasco', 'Salsa', 'Sambal', 'Green Sauce'];
  
  //1st arg = what is state element called in HTML
  //2nd arg = what function will update the state?
  const [sauces, setSauces] = useState(sauceList) //what do we want our default state to be?

  return(
    <div>
      <h2>My super React site!</h2>
      {/* {
        //insert JS into HTML w/ curly braces
        //whenever you map over a list, include an index key
        sauces.map((sauce, idx) => <h3 key={idx}> {sauce}</h3>)
      } */}
      <ItemContainer item={sauces} banana={'green'} />
    </div>
  )
}

export default App;