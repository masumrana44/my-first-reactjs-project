 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Allgun from './components/AllGun/Allgun';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const IncreaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <Allgun IncreaseCount={IncreaseCount}></Allgun>
    </div>
  );
}

export default App;
