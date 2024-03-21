import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Routes> {/* Wrap Routes */}
        <Route path='/' element={<Home />} /> {/* Use 'element' prop */}
        {/* 
        Other routes go here...
        */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
