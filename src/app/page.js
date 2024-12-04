import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <section className="pt-32 "> 
  <div className="max-w-xl mb-8">
    <h1 className="text-6xl font-bold">
      Everything You Need All in One Link
    </h1>
    <h2 className="text-xl text-slate-500">
      Showcase your social profiles, contact details, and more on a single, seamless page.
    </h2>
      </div>
      <form className="flex shadow-black/40 ">
  <div className="flex items-center bg-white rounded-l-md overflow-hidden shadow-md">
    <span className="px-4">LinkList.to/</span>
    <input 
      type="text" 
      className=" bg-white flex "
      placeholder="Enter text"
    />
  </div>
  <button 
    className="px-6 py-4 bg-blue-500 text-white shadwo-md rounded-r-md"
    type="submit"
  >
    Join for Free
  </button>
</form>

      </section>
    </main>
  );
}
