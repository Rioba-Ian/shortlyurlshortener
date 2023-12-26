import {StatisticsCard} from "./components/Card";
import {FormSection} from "./components/Form";
import {Hero} from "./components/Hero";
import {Navbar} from "./components/Navbar";

function App() {
 return (
  <div>
   <div
    id="header-container"
    style={{width: "min(80%, 1440px)", margin: "0 auto"}}
   >
    <Navbar />
    <Hero />
   </div>
   <main class="bg-very-light-gray">
    <div
     id="header-container"
     class="flex flex-col items-center pb-[15vmin]"
     style={{width: "min(80%, 1440px)", margin: "0 auto"}}
    >
     <FormSection />
     <StatisticsCard />
    </div>
   </main>
  </div>
 );
}

export default App;
