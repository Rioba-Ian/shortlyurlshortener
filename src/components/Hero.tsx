import IllustrationWorking from "../assets/images/illustration-working.svg";

export function Hero() {
 return (
  <section class="mt-[10vmin] py-4 grid">
   <div
    id="hero-section"
    class="flex flex-col items-center  gap-8 sm:flex-row-reverse"
   >
    <div id="hero-image" class="grid">
     <img src={IllustrationWorking} alt="woman working illustation" />
    </div>
    <div
     id="hero-content"
     class="grid items-start text-center sm:text-left sm:w-4/5"
    >
     <h1>More than just shorter links</h1>
     <p class="text-shortly-gray mt-2 mb-8">
      Build your brand’s recognition and get detailed insights on how your links
      are performing.
     </p>
     <div class="mx-auto sm:ml-0">
      <button>Get Started</button>
     </div>
    </div>
   </div>
  </section>
 );
}
