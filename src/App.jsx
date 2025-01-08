
import './App.css'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Video from './components/Video'
import Explore from './components/Explore'
import VideoCara from './components/VideoCara'
import Model from './components/Model'
function App() {
 
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      {/* <VideoCara/> */}
      <Explore/>
      <Model/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default App
