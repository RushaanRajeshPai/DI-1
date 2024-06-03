import './App.css';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Clientss from './Components/Clientss/Clients'
import Servicess from './Components/Servicess/Services'
import Promotion from './Components/Promotion/Promotion'
import Milestones from './Components/Milestones/Milestones'
import Testimonial from './Components/Testimonial/Testimonial'
import News from './Components/News/News'
import OurTeam from './Components/OurTeam/OurTeam';
import CallToAction from './Components/CallToAction/CallToAction'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clientss />
      <Servicess />
      <Promotion />
      <Milestones />
      <Testimonial />
      <News />
      <OurTeam />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
