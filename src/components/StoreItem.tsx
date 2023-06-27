import { formatCurrency } from "../util/FormatCurenncy";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity: number = 2;
  return (
    <div className="h-full">
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
        {/* Add Buton to cart */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="w-full bg-blue-600 rounded-md text-white py-1">
              Add To Cart
            </button>
          ) : (
            <div className="flex  flex-col items-center gap-4">
              {/*Add Button */}
              <div className="flex flex-row items-center">
                <button className="p-3 bg-blue-600 rounded text-white">
                  {" "}
                  -{" "}
                </button>
                <p className="text-gray-600 m-1">
                  <span className="text-lg font-semibold ">{quantity}</span> in
                  cart
                </p>
                <button className="p-3 bg-blue-600 rounded text-white">
                  {" "}
                  +{" "}
                </button>
              </div>
              {/*Remove Button */}
              <button className="bg-red-600 text-white rounded px-3 py-2">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
