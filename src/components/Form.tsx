export function FormSection() {
 return (
  <section class="bg-dark-violet p-6 rounded-xl -translate-y-16  w-full ">
   <form class="space-y-6 sm:flex sm:flex-row sm:items-center gap-4">
    <input
     type="text"
     placeholder="Enter a link here..."
     class="w-full sm:w-4/5 py-2 px-2 rounded-lg sm:flex-grow-4"
    />
    <div class="w-full sm:flex-1 ">
     <button class="w-full rounded-lg text-lg mb-5">Shorten it!</button>
    </div>
   </form>
  </section>
 );
}
