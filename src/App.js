import './App.css';
import Main from './Main';
import ShoppingCart from './ShoppingCart';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shop' element={<ShoppingCart /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
