import "./App.css";
import Header from "./Header";
import TimesList from "./TimesList";
import Menu from "./Menu";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        fontFamily: "alexandria",
        direction: "rtl",
      }}
    >
      <Header />
      <div>
        <TimesList />
      </div>
      <Menu />
    </div>
  );
}

export default App;
