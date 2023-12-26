import {For, createSignal} from "solid-js";
import BrandCardImg from "../assets/images/icon-brand-recognition.svg";
import DetailedRecordsImg from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableImg from "../assets/images/icon-fully-customizable.svg";

const cardContents = [
 {
  id: 1,
  image: BrandCardImg,
  title: "Brand Recognition",
  content:
   " Boost your brand recognition with each click. Generic links don't \
    mean a thing. Branded links help instil confidence in your content.",
 },
 {
  id: 2,
  image: DetailedRecordsImg,
  title: "Detailed Records",
  content:
   "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
 },
 {
  id: 3,
  image: FullyCustomizableImg,
  title: "Fully Customizable",
  content:
   " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
 },
];

export function StatisticsCard() {
 const [statCards, setStatCards] = createSignal(cardContents);
 return (
  <section class="z-5">
   <div id="title-section" class="text-center space-y-4 pb-20">
    <h2>Advanced Statistics</h2>
    <p class="text-grayish-violet">
     Track how your links are performing across the web with our advanced
     statistics dashboard.
    </p>
   </div>
   <div id="stat-cards" class="grid grid-row-3 gap-20">
    <For each={statCards()}>
     {(card, i) => (
      <article class="bg-white flex flex-col items-center px-6 pt-2 pb-8 rounded-xl text-center">
       <div
        id="card-img"
        class="bg-very-dark-blue rounded-full p-4 -translate-y-12"
       >
        <img src={card.image} alt={card.title} />
       </div>
       <h3 class="pb-4">{card.title}</h3>
       <p class="text-grayish-violet">{card.content}</p>
      </article>
     )}
    </For>
   </div>
  </section>
 );
}
