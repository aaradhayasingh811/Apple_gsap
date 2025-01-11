
import './App.css'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Video from './components/Video'
import Explore from './components/Explore'
import VideoCara from './components/VideoCara'
import { Hand } from './components/Hand'
import { Zoom } from './components/Zoom'
import { PhotographicStyle } from './components/PhotographicStyle'
import Model from './components/Model'
import Comaparison from './components/Comaparison'
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
      <Hand/>
      <Zoom/>
      <PhotographicStyle/>
      <Comaparison/>
      <Footer/>
    </div>
  )
}

export default App
