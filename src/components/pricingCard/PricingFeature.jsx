import { CircleCheck } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="text-black flex gap-2">
      <CircleCheck></CircleCheck>
      {feature}
    </p>
  );
};

export default PricingFeature;
