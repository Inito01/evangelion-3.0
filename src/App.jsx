import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Characters } from './components/Characters';
import { Media } from './components/Media';
import { Staff } from './components/Staff';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Characters />
      <Staff />
      <Media />
      <Footer />
    </>
  )
}

export default App
