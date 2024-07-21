export default function Hero() {
  return <header>
    <div className="mt-24 flex flex-col gap-16 items-center h-screen min-h-[900px] md:min-h-screen md:flex-row md:justify-between">
      <div className="md:-mt-24 md:w-3/5">
        <h1 className="text-slate-800 text-3xl font-extrabold lg:text-5xl">Discover, Explore, and Find Everything You Need in One Place</h1>
        <p className="mt-3 mb-5 text-sm leading-6">
          Explore our curated catalog for the latest tech, timeless fashion, expert reviews, and insightful articles. Discover endless possibilities at CatalogSphere, your ultimate destination for seamless browsing.
        </p>
        <button 
           onClick={() =>
            window.scrollTo({ top: 700, behavior: "smooth" })
          }
          className="rounded-lg py-3 px-6 bg-orange-900 text-white font-semibold text-xl transition-all hover:scale-105">
            Let&apos;s find it
        </button>
      </div>
      <div className="md:w-2/5">        
        <img src="/woman.png" alt="Woman" className="ml-auto w-64 md:w-9/12 object-cover object-top" />        
      </div>
    </div>
  </header>
}