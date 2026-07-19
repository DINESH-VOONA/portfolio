import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const background =
  "radial-gradient(circle at 15% 10%, rgba(248,113,113,0.14) 0%, transparent 25%), linear-gradient(180deg, #080808 0%, #030303 100%)";

function App() {
  return (
    <div
      style={{
        backgroundColor: '#080808',
        backgroundImage: background,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
