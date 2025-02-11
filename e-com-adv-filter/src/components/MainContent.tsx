import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";
import axios from "axios";
import BookCard from "./BookCard";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error to fetch products:", error);
      });
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  const totalProducts = 100;
  const totalPage = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const GetPaginatonButton = () => {
    const buttons: number[] = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.max(totalPage, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPage, endPage + (2 - (currentPage - 1)));
    }
    if (currentPage + 2 > totalPage) {
      startPage = Math.max(1, startPage - (2 - (totalPage - currentPage)));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="xl:w-[55rem] mr-[10rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-5">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-4 py-2 rounded-full flex items-center cursor-pointer"
            >
              <Tally3 />
              {filter === "all"
                ? "filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>

            {dropdownOpen && (
              <div className="absolute bg-gray-900 border border-gray-800 rounded-lg mt-2 w-full sm:w-40 shadow-xl p-2">
                <button
                  onClick={() => setFilter("cheap")}
                  className="block w-full text-left py-2 px-4 text-sm rounded-lg cursor-pointer hover:bg-gray-800"
                >
                  Cheap
                </button>

                <button
                  onClick={() => setFilter("expensive")}
                  className="block w-full text-left py-2 px-4 text-sm rounded-lg cursor-pointer hover:bg-gray-800"
                >
                  Expensive
                </button>

                <button
                  onClick={() => setFilter("popular")}
                  className="block w-full text-left py-2 px-4 text-sm rounded-lg cursor-pointer hover:bg-gray-800"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="ml-2 grid grid-cols-4 sm:grid-cols-3 md-grid-cols-4 gap-5">
          {/* BookCard */}

          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border px-4 py-2 mx-2 rounded-full cursor-pointer"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center">
            {/* pagination button */}
            {GetPaginatonButton().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border cursor-pointer px-4 py-2 mx-1 rounded-full ${
                  page === currentPage ? "bg-gray-400 text-black" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
            className="border px-4 py-2 mx-2 rounded-full cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
