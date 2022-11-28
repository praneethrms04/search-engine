import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ImagePage from "../pages/Image/ImagePage";
import NotFound from "../pages/NotFound/NotFound";
import SearchResult from "../pages/Search-result/SearchResult"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/image" element={<ImagePage />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
  


export default AppRoutes;
