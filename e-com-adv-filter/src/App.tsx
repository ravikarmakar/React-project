import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSeller from "./components/TopSeller";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900/95 text-white">
        <Sidebar />

        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>
            <TopSeller />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

//  bg-[#1B1B1D]
