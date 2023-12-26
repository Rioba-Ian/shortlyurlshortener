import {Hero} from "./components/Hero";
import {Navbar} from "./components/Navbar";

function App() {
 return (
  <div style={{width: "min(80%, 1440px)", margin: "0 auto"}}>
   <Navbar />
   <Hero />
  </div>
 );
}

export default App;
