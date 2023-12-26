import {createSignal} from "solid-js";
import {Navbar} from "./components/Navbar";

function App() {
 const [count, setCount] = createSignal(0);

 return (
  <div style={{width: "min(80%, 1440px)", margin: "0 auto"}}>
   <Navbar />
  </div>
 );
}

export default App;
