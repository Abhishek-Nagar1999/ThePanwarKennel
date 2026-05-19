import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Puppies from './components/Puppies';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileActionBar from './components/MobileActionBar';
import LocalBusinessSchema from './components/LocalBusinessSchema';

export default function App() {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <main className="main-content">
        <Hero />
        <Puppies />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </>
  );
}
