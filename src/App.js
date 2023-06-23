import { useState } from 'react';
import './App.css';
import Nav from './layout/Nav';
import User from './components/User';
function App() {
  const [title , setTitle] = useState('Home')
 
  return (
    <div className="App">
      <Nav link={title}/>
      <User />
    </div>
  );
}

export default App;
