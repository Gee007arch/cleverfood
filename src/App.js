import NavBar from './components/NavBar';
import Showcase from './components/Showcase';
import LookFor from './components/LookFor';
import SpecialOffers from './components/SpecialOffers';
import Collections from './components/Collections';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

function App() {
  document.title=" CleverFood";
  return (
   <>

   <NavBar />
   <Showcase  />
   <LookFor  />
   <SpecialOffers  />
   <Collections  />
   <Download />
   <Footer />
   
 
   
   </>
  );
}

export default App;
