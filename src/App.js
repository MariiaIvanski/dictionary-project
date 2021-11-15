import logo from "./logo.png";
import cog from "./cog.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App d-flex">
      <div className="container">
        <header>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <div className="row">
          <div className="col">
            <img
              src={cog}
              className="cog-image-minor img-fluid mb-2"
              alt="cog"
            />
            <img src={cog} className="cog-image img-fluid" alt="cog" />
          </div>
          <div className="col dictionaryApp">
            <h1>Dictionary</h1>
            <main>
              <Dictionary defaultKeyword="steam" />
            </main>
          </div>
          <div className="col">
            <img src={cog} className="cog-image img-fluid  mb-2" alt="cog" />
            <img src={cog} className="cog-image-minor img-fluid" alt="cog" />
          </div>
        </div>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by{" "}
            <a
              href="https://inspiring-noyce-9d41a5.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mariia Ivanski
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MariiaIvanski/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </div>
    </div>
  );
}
