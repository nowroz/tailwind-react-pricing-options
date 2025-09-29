import DaisyUIPricingFeature from "./DaisyUIPricingFeature";

const DaisyUIPricingCard = ({
  option: { name, price, billingCycle, features },
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm ">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">
            ${price}/{billingCycle.slice(0, 2)}
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
          {features.map((feature, index) => (
            <DaisyUIPricingFeature
              key={index}
              feature={feature}
            ></DaisyUIPricingFeature>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default DaisyUIPricingCard;
