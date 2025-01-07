
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Video from './components/Video'
import Explore from './components/Explore'
function App() {
 
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Explore/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default App
