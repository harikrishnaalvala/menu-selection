const ContentHeader = ({ activeCategory, count }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-bold text-lg text-gray-800 items-center">
      {activeCategory}s Selected ({count})
    </h2>
  </div>
);

export default ContentHeader;
