import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/Footer/Footer';
import MainSection from './component/MainSection/MainSection';
import Navbar from './component/Navbar/Navbar';
import Projects from './component/Projects/Projects';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <MainSection />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
