import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdSearch, MdOndemandVideo, MdTab, MdImage } from "react-icons/md";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../../common/components/search-bar/SearchBar";
import google from "../../common/assets/images/google.png";

import { searchForQuery } from "../../api/search";
import "./searchresult.css";
import About from "../About/About";

const SearchResult = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const searchQuery = params.get("searchQuery") || "";
  // const [searchResult, setSearchresult] = useState({});

  const getSearchData = useCallback(() => {
    searchForQuery(searchQuery)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchQuery]);

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearchSubmit = (searchText) => {
    const searchQuery = searchText.replaceAll(" ", "+");
    navigate(`/search?searchQuery=${searchQuery}`);
  };
  const goTofilter = (link) => {
    if (link) {
      navigate(link);
    }
  };

  const filterOptions = [
    {
      icon: <MdSearch />,
      text: "All",
      link: "/all",
    },
    {
      icon: <MdTab />,
      text: "News",
      link: "/news",
    },
    {
      icon: <MdImage />,
      text: "Images",
      link: "/images",
    },
    {
      icon: <MdOndemandVideo />,
      text: "Videos",
      link: "/videos",
    },
  ];

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand className="ms-3">
              <img src={google} alt="googlelogo" height={35} />
            </Navbar.Brand>
          </Link>

          <div className="ms-5">
            <SearchBar
              // hideButtons
              onSubmit={handleSearchSubmit}
              defaultValue={searchQuery}
            />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Link</Nav.Link>
              <Nav.Link href="store" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex align-items-center">
        {filterOptions.map((option) => {
          return (
            <div
              className="d-flex mt-4 ms-5 cursor-pointer"
              key={option.link}
              onClick={() => goTofilter(option.link)}
            >
              <span className="mt- ms-2 ">{option.icon}</span>
              <span className="mx-1">{option.text}</span>
            </div>
          );
        })}
        <div>
          <hr />
        </div>
      </Container>
      <div>
        <About />
      </div>
    </>
  );
};

export default SearchResult;
