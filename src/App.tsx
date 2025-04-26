import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import Home from './pages/home';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <div className='min-h-[calc(100vh-4rem)]'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App