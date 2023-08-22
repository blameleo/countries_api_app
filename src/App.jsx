import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchfilter from "./components/Searchfilter";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryCard from "./components/CountryCard";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(data);

  const handleDarkMode = () => {
    setToggle((prev) => !prev);
  };

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <div className={`${toggle ? "bg-slate-800 h-screen" : ""}`}>
        <Navbar setToggle={handleDarkMode} toggle={toggle} />

        <Routes>
          <Route
            path="/country/:countryId"
            element={<CountryDetail data={data} toggle={toggle} />}
          />
          <Route
            path="/"
            element={
              <CountryCard setData={setData} data={data} toggle={toggle} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
