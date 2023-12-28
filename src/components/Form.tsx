import {Show, createEffect, createSignal} from "solid-js";
import axios, {AxiosResponse} from "axios";
import {z} from "zod";

const urlSchema = z.object({
 url: z
  .string({
   required_error: "URL is required",
  })
  .url({
   message: "Invalid URL, Please enter a valid url",
  }),
});

export function FormSection() {
 const [formData, setFormData] = createSignal({});

 const [error, setError] = createSignal<string | null>();

 const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  const entries = Array.from(data.entries());
  const formData = Object.fromEntries(entries);
  const urlData = formData["url-destination"];

  console.log(urlData);

  const result = urlSchema.safeParse({url: urlData});

  if (!result.success) {
   setError(result.error.errors[0]?.message);
   return;
  }

  console.log(result);

  const payload = {
   destination: urlData,
  };

  console.log(error());

  setFormData(payload);

  console.log(payload, "payload");

  try {
   const response: AxiosResponse = await axios.post(
    "https://urlshortener-restapi.vercel.app/api/shorturl",

    payload,
    {
     headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type, X-CSRF-TOKEN",
     },
    }
   );

   console.log(response.status);

   if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
   }

   const apiResponse = response.data;
   console.log(apiResponse);
  } catch (e: unknown) {
   if (e instanceof axios.AxiosError) {
    setError(e.message);
    console.log(e);
   }
  }
 };

 createEffect(() => console.log(formData()));

 return (
  <section class="bg-dark-violet p-6 rounded-xl -translate-y-16  w-full ">
   <form
    class="space-y-6 sm:flex sm:flex-row sm:items-center gap-4"
    onSubmit={handleSubmit}
   >
    <input
     type="text"
     name="url-destination"
     placeholder="Enter a link here..."
     required
     class="w-full sm:w-4/5 py-2 px-2 rounded-lg sm:flex-grow-4"
    />
    <div class="w-full sm:flex-1 ">
     <button class="w-full rounded-lg text-lg mb-5">Shorten it!</button>
    </div>
   </form>
   <Show when={error()}>
    <p class="text-red-500">{error()}</p>
   </Show>
  </section>
 );
}
