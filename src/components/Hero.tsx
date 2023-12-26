import IllustrationWorking from "../assets/images/illustration-working.svg";

export function Hero() {
 return (
  <section class="mt-[10vmin] py-4 grid grid-cols-2 gap-8 ">
   <div id="hero-content" class="w-4/5">
    <h1>More than just shorter links</h1>
    <p class="text-shortly-gray mt-2 mb-8">
     Build your brand’s recognition and get detailed insights on how your links
     are performing.
    </p>
    <button>Get Started</button>
   </div>
   <div id="hero-image">
    <img src={IllustrationWorking} alt="woman working illustation" />
   </div>
  </section>
 );
}
