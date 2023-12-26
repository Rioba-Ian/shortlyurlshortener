import {createSignal} from "solid-js";

function App() {
 const [count, setCount] = createSignal(0);

 return (
  <>
   <h1>Hello Mum.</h1>
  </>
 );
}

export default App;
