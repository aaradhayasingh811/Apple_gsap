
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Video from './components/Video'
function App() {
 
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default App
