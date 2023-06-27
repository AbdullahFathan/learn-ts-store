import { formatCurrency } from "../util/FormatCurenncy";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div>
      {/* Image card */}
      <div className="h-[200px] my-10 relative">
        <img
          src={imgUrl}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt={name}
        />
      </div>
      {/* Body Item card */}
      <div className="flex flex-col px-2">
        <div className="flex flex-row justify-between items-baseline">
          <span className="text-xl">{name}</span>
          <span className="text-md text-gray-600">{formatCurrency(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
