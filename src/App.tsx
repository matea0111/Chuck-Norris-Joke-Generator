import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SavedJokes from './pages/Saved';
import Navbar from './components/Navbar';



const App:React.FC = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saved" element={<SavedJokes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
