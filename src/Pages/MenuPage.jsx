import { useMemo, useState } from "react";
import initialDishes from "../data/mockDishes";

import Header from "../components/Header";
import Filters from "../components/Filters";
import ContentHeader from "../components/ContentHeader";
import DishList from "../components/DishList";
import IngredientModal from "../components/IngredientModal";
import Footer from "../components/Footer";

export default function MenuPage({setRecipe,selectIngredient}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Main Course');
   
    const [cart, setCart] = useState({}); // { dishId: 1 }
    const [selectedDish, setSelectedDish] = useState(null);
    
    const categories = ['Starter', 'Main Course', 'Desert', 'Sides'];

    const filteredDishes = useMemo(() => {
        return initialDishes.filter(dish => {
            const matchesCategory = dish.category === activeCategory;
            const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);
    
    const getCountByCategory = (category) => {
        return Object.keys(cart).reduce((acc, dishId) => {
            const dish = initialDishes.find(d => d.id === parseInt(dishId));
            if (dish && dish.category === category) {
                return acc + cart[dishId];
            }
            return acc;
        }, 0);
    };

    const totalSelected = Object.keys(cart).length;

    const handleAddToCart = (dishId) => {
        setCart(prevCart => ({ ...prevCart, [dishId]: 1 }));
        
    };

    const handleRemoveFromCart = (dishId) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            delete newCart[dishId];
            return newCart;
        });
        
    };
    
    
    

    const handleSelectDish = (dish) => setSelectedDish(dish);
    const handleCloseModal = () => setSelectedDish(null);

    return (
       <div>
         <div className="bg-[#FFD6A5] min-h-screen font-sans flex justify-center">
            <div className="w-full  max-w-6xl bg-white flex flex-col">
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Filters 
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    getCountByCategory={getCountByCategory}
                />
                
                <main className="flex-grow p-4 overflow-y-auto">
                    <ContentHeader 
                        activeCategory={activeCategory}
                        count={getCountByCategory(activeCategory)}
                        
                    />
                    <DishList 
                        dishes={filteredDishes} 
                        cart={cart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        onSelectDish={handleSelectDish}
                    />
                </main>

                <Footer totalSelected={totalSelected} />

                <IngredientModal 
                    selectIngredient={selectIngredient}
                    setRecipe={setRecipe}
                    dish={selectedDish}
                    onClose={handleCloseModal}
                    cart={cart}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
       
       </div>
        
    );
}

