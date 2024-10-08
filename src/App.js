import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This a project was coded by{" "}
          <a
            href="https://github.com/shajmin306"
            target="_blank"
            rel="noreferrer"
          >
            Shajmin Rahman{" "}
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/shajmin306/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
