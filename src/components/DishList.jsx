import DishCard from "./DishCard";

const DishList = ({ dishes, cart, handleAddToCart, handleRemoveFromCart, onSelectDish }) => (
  <div className=" bg-white grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {dishes.length > 0 ? (
      dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          onSelectDish={onSelectDish}
        />
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">No dishes match your criteria.</p>
    )}
  </div>
);

export default DishList;
