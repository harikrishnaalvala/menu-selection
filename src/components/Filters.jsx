const Filters = ({ categories, activeCategory, setActiveCategory, getCountByCategory }) => (
  <nav className="p-4 flex space-x-2 overflow-x-auto">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap ${
          activeCategory === category ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        {category} {getCountByCategory(category) > 0 ? getCountByCategory(category) : "0"}
      </button>
    ))}
  </nav>
);

export default Filters;
