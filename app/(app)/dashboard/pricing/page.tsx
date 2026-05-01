import { PricingTable } from "@clerk/nextjs";

const PricingPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center m-2">Chose your plan!</h1>
      <PricingTable for="organization" />
    </div>
  );
};
export default PricingPage;
