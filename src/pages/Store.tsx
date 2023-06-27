import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;
