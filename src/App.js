import logo from "./logo.svg";
import "./App.css";
import LanguageIcon from "@mui/icons-material/Language";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-yellow-400 font-sans sticky">
        <section className="inner-section relative flex h-16 items-center justify-between container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} className="block h-8 w-auto" alt="logo" />
          </div>
          <nav className="App-navigation" aria-label="Main navigation">
            <ul className="App-Navbar flex items-center justify-center gap-8 text-slate-900 font-medium">
              <li className="App-Navlink">
                <a href="#f">Why Propeller?</a>
              </li>
              <li className="App-Navlink">
                <a href="#ff">Solution</a>
              </li>
              <li className="App-Navlink">
                <a href="#ff">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="App-Side-Nav flex items-center justify-center">
            <div className="flex items-center justify-center text-slate-900">
              <div className="language flex items-center justify-center gap-4 font-medium">
                <a href="#f" alt="Language Icon" aria-label="Select language">
                  <LanguageIcon></LanguageIcon>
                </a>
                <button>Loging</button>
                <button className="border border-black rounded-full py-1 px-5 leading-6 hover:bg-zinc-900 hover:text-white ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="bg-zinc-900 h-screen flex items-center justify-center">
        <div className="text-white flex items-center justify-center">
          <article className="flex flex-col items-center justify-center font-medium">
            <h1 className="text-8xl w-3/5 text-wrap text-center px-2 leading-snug">
              Replace guesswork{" "}
              <span className="text-yellow-400">with great work.</span>
            </h1>
            <p className="m-16 text-2xl w-3/5">
              Empower your team to map, measure, and manage their reality with
              survey-grade accuracy.
            </p>
            <button className="">Visit Now</button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
