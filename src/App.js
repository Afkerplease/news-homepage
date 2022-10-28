import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Pictures from "./components/Pictures";

function App() {
  return (
    <main className="font-Inter">
      <div className="container mx-auto w-[375px] md:w-[1440px] ">
        <Navbar />
        <Grid />
        <Pictures />
      </div>
    </main>
  );
}

export default App;
