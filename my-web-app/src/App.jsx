import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Testimonials from './pages/Testimonials';
import UnderDevelopment from './pages/UnderDevelopment';

function App() {

  return (
      <Router basename="/my-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/personal-guides" element={<AboutMe />} />
          <Route path="/under-development" element={<UnderDevelopment />} />
        </Routes>
      </Router>
  )
}

export default App
