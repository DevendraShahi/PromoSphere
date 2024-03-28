import './App.css'
import Hero from './Hero';
import Featured from './Featured';
import Navbar from './partials/Navbar';
import Working from './Working';
import ChooseUs from './ChooseUs';
import Testimonial from './Testimonial';
import Services from './Services';
import Footer from './partials/Footer';
import Influencer from './components/influencer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Influencer />
      <Working />
      <ChooseUs />
      <Testimonial />
      <Services />
      <Footer />
    </>
  )
}

export default App;
