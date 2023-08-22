import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Searchfilter({ setData, toggle }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = async (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Your form submission logic here
    console.log("Form submitted with value:", inputValue);
    try {
      const response = await axios.get(
        ` https://restcountries.com/v3.1/name/${inputValue}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  useEffect(() => {
    if (selectedRegion) {
      fetchData(selectedRegion);
    }
  }, [selectedRegion]);

  const fetchData = async (region) => {
    try {
      const response = await axios.get(
        ` https://restcountries.com/v3.1/region/${region}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-10 sm:px-20 px-10">
      <form className="flex sm:flex-row flex-col  justify-between ">
        <div className="relative  sm:w-[40%] w-full ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={inputValue}
            name="search"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className={`w-full sm:w-[100%] shadow outline-none p-4 pl-10 text-sm text-gray-900  rounded-lg ${
              toggle ? "bg-slate-900 text-white" : ""
            }`}
            placeholder="Search for a country..."
            required
          />
        </div>

        <div className="mt-8 sm:mt-0 ">
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className={`text-gray-700 ${
              toggle ? "bg-slate-900 text-white" : ""
            } bg-white w-48 focus:outline-none font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center shadow`}
          >
            <option value="" className="">
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </div>
  );
}
