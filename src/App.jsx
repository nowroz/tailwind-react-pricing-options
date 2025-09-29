import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";
import ResultChart from "./components/resultChart/ResultChart";
import AxiosMarksChart from "./components/axiosMarksChart/AxiosMarksChart";
import axios from "axios";

const pricingOptionsPromise = fetch("./pricing-data.json").then((response) =>
  response.json(),
);

const marksPromise = axios.get("./student-results-nested.json");

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

        <ResultChart></ResultChart>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AxiosMarksChart marksPromise={marksPromise}></AxiosMarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
