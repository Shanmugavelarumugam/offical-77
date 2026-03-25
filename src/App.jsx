import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Programs from './sections/Programs/Programs';
import Plans from './sections/Plans/Plans';
import Trainers from './sections/Trainers/Trainers';
import Gallery from './sections/Gallery/Gallery';
import Branches from './sections/Branches/Branches';
import Contact from './sections/Contact/Contact';
import Marquee from './components/ui/Marquee';

import { ReactLenis } from 'lenis/react';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <main>
          <Home />
          <Marquee />
          <About />
          <Programs />
          <Plans />
          <Trainers />
          <Gallery />
          <Branches />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
