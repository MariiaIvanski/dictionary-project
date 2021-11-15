import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="steam" />
        </main>

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
