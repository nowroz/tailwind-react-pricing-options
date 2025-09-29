import PricingFeature from "./PricingFeature";

const PricingCard = ({ option: { name, price, billingCycle, features } }) => {
  return (
    <div className="p-4 rounded-2xl border border-white flex flex-col">
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-4xl">{name}</h1>
        <h4 className="text-xl">
          ${price} {billingCycle}
        </h4>
      </div>

      <div className="bg-white p-4 rounded-xl flex-1">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>

      <button className="btn btn-full rounded-xl bg-emerald-600 mt-4 ">
        Wide
      </button>
    </div>
  );
};

export default PricingCard;
