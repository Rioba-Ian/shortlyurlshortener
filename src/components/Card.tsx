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
   " Boost your brand recognition with each click. Generic links don’\t \
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
   <div id="title-section">
    <h2>Advanced Statistics</h2>
    <p>
     Track how your links are performing across the web with our advanced
     statistics dashboard.
    </p>
   </div>
   <For each={statCards()}>
    {(card, i) => (
     <article class="">
      <div id="card-img">
       <img src={card.image} alt={card.title} />
      </div>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
     </article>
    )}
   </For>
  </section>
 );
}
