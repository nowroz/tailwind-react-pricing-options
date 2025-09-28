import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
    </>
  );
}

export default App;
