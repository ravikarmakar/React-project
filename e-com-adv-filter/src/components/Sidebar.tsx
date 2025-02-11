import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shose",
    "shirt",
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        const data: FetchResponse = await response.json();

        const uiqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );

        setCategories(uiqueCategories);
      } catch (error) {
        console.log("Error to fetching Products :", error);
      }
    };

    fetchProducts();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleReadioCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleFilterReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 pt-3 pl-8 h-screen">
      <h1 className="text-2xl font-bold mb-6 mt-2">React Store</h1>

      <section>
        <input
          type="text"
          placeholder="Search Products"
          className="border-2 rounded px-2 sm:mb-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-center mt-3 items-center">
          <input
            type="text"
            className="border-2 mr-2 mx-5 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 mr-2 mx-5 mb-3 w-full"
            placeholder="Max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Categories Section */}

        <div className="mb-2">
          <h2 className="text-lg text-gray-400 font-semibold">Categories</h2>
        </div>

        <section>
          {categories.map((category, index) => (
            <label className="block mb-2 text-sm cursor-pointer" key={index}>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => handleReadioCategoryChange(category)}
                checked={selectedCategory === category}
                className="mr-2 h-[16px] w-[16px] cursor-pointer"
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/* Keywords Section */}

        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-2 text-gray-400">Keywords</h2>

          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-2 px-4 py-1 w-full text-sm text-left hover:bg-gray-600 border border-gray-600 rounded text-gray-400 cursor-pointer hover:text-gray-200 hover:border-gray-400"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleFilterReset}
          className="w-full py-2 mb-[4rem] cursor-pointer text-white rounded mt-5 bg-black"
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
