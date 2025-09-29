import { use } from "react";
import PricingCard from "../pricingCard/PricingCard";
import DaisyUIPricingCard from "../pricingCard/DaisyUIPricingCard";

const PricingOptions = ({ pricingOptionsPromise }) => {
  const result = use(pricingOptionsPromise);
  const pricingOptions = result.pricingOptions;

  console.log(pricingOptions);

  return (
    <div className="container mx-auto">
      <h2 className="text-6xl my-10 text-center">Get our membership</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {pricingOptions.map((option) => ( */}
        {/*   <PricingCard key={option.id} option={option}></PricingCard> */}
        {/* ))} */}
        {pricingOptions.map((option) => (
          <DaisyUIPricingCard
            key={option.id}
            option={option}
          ></DaisyUIPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
