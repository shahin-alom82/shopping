import { twMerge } from "tailwind-merge";


const PriceFormate = ({ amount, className }) => {
      const PriceFormateData = new Number(amount).toLocaleString('en-US', {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
      })
      return (
            <div className={twMerge("text-gray-800", className)}>
                  {PriceFormateData}
            </div>
      );
};

export default PriceFormate;