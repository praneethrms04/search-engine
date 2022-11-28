import { useNavigate } from "react-router-dom";
import Header from "../../common/components/header/Header";
import google from "../../common/assets/images/google.png";
import SearchBar from "../../common/components/search-bar/SearchBar";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = searchText => {
      const searchQuery = searchText.replaceAll(" ", "+");
      navigate(`/search?searchQuery=${searchQuery}`);
      
  };
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="w-full my-5 d-flex justify-content-center">
        <div className="w-half mt-4">
          <img
            src={google}
            alt="Google Search logo"
            className="logo-width ms-5"
            height={70}
          />

          <div className="search-container mt-4">
            <SearchBar onSubmit ={handleSearchSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
