import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mi" element={<About />} />
                    <Route path="/habilidades" element={<Skills />} />
                    <Route path="/experiencia" element={<Experience />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route
                        path="/certificaciones"
                        element={<Certifications />}
                    />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}