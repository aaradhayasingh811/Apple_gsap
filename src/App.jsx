
import './App.css'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Video from './components/Video'
import Explore from './components/Explore'
import VideoCara from './components/VideoCara'
function App() {
 
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      {/* <VideoCara/> */}
      <Explore/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default App
