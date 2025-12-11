import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { AnimatePresence, motion } from 'framer-motion'; // Import framer-motion components
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Animation settings (variants)
const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// New component to handle the animation wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage element={<Home />} />} />
        <Route path="/about" element={<AnimatedPage element={<About />} />} />
        <Route path="/projects" element={<AnimatedPage element={<Projects />} />} />
        <Route path="/contact" element={<AnimatedPage element={<Contact />} />} />
        <Route path="*" element={<AnimatedPage element={<h1>404 Not Found</h1>} />} />
      </Routes>
    </AnimatePresence>
  );
};

// Wrapper component to apply motion to each page
const AnimatedPage = ({ element }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ width: '100%' }}
       onAnimationStart={() => document.body.style.cursor = 'default'}
        onAnimationComplete={() => document.body.style.cursor = 'default'}
    >
        {element}
    </motion.div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes /> {/* Use the new component */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;