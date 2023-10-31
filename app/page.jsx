import Navbar from "./Navbar"

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className=" my-12 text-center">
        <h1 className=" bg-gradient-to-r from-brand-200 via-brand-600 to-brand-500 text-brand-900 text-opacity-0 bg-clip-text text-7xl mb-10 md:text-5xl">
          Save Your Money
        </h1>
        <button className=" bg-gradient-to-br from-brand-200 to-brand-500 rounded w-40 h-12 text-xl font-bold md:w-32 md:h-10 md:text-lg">
          Jetzt starten
        </button>
      </div>
      <div className=" bg-gradient-to-br from-brand-600 to-brand-400 rounded-md h-[28rem] m-2 shadow-inner">
        <div className="bg-brand-50 m-6 relative top-7 rounded w-80 h-96 p-3">
          Sieht das Ok aus? <br />
          Hier kommt einb bild hin <br /><br /><br /><br /><br />
          Hier kommt dann eine beschreibung ---&gt;
        </div>
      </div>
    </main>
  )

  function card(props) {
  return(
    <div>
      {props.title}
    </div>
  );
  }
  

}


