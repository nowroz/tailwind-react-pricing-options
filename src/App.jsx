import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";

const pricingOptionsPromise = fetch("./pricing-data.json").then((response) =>
  response.json(),
);

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
      <main>
        <Suspense>
          <PricingOptions
            pricingOptionsPromise={pricingOptionsPromise}
          ></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
