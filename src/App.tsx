import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import Home from './pages/home';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <div className='min-h-[calc(100vh-4rem)] p-8'>
      <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects route */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App