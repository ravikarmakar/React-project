import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="border-2 border-gray-200 text-black p-4 flex justify-between items-center">
      <div className="flex border-gray-200 items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem] gap-2">
        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      <section className="flex items-center mr-[5rem]">
        <FaUserCircle className="text-3xl mr-2" />
      </section>
    </nav>
  );
};

export default Navigation;
