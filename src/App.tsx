import Banner from "./Banner"
import About from "./descomplica_futuro/About"
import Sessions from "./descomplica_futuro/Sessions"
import Understand from "./descomplica_futuro/Understand"
import Header from "./Header"
import WhatsappButton from "./WhatsappButton"

import Therapy from "./Therapy"
import Feedbacks from "./Feedbacks"
import AboutMe from "./AboutMe"

import Location from "./Location"
import Footer from "./Footer"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <main className="bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <WhatsappButton />
      <About />
      <Understand />
      <Sessions />
      <Therapy />
      <Feedbacks />
      <AboutMe />
      <Location />
      <Footer />
    </main>
  )
}

export default App
