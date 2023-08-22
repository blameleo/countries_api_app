import React from "react";
import Searchfilter from "./Searchfilter";
import { Link } from "react-router-dom";

export default function CountryCard({ setData, data, toggle }) {
  console.log(data);
  return (
    <div>
      <Searchfilter setData={setData} toggle={toggle} />

      <div className="grid sm:grid-cols-4 gap-10 place-items-center mt-10 sm:px-16">
        {data?.map((country, i) => {
          return (
            <div
              key={i}
              className={`w-[270px] shadow-lg ${
                toggle ? "bg-slate-900 text-white" : " bg-white"
              }  h-[320px] rounded-lg`}
            >
              {/* <div
        className={`h-[150px] w-full border bg-[url(${country.flags.png})]`}
      ></div> */}
              <img
                src={country.flags.png}
                alt=""
                className="h-[150px] w-full rounded-t-lg"
              />
              <div className="pl-5 pt-4 text-sm">
                <Link to={`/country/${country.ccn3}`}>
                  <h1 className="font-bold pb-4 text-[15px]">
                    {country.name.official}
                  </h1>
                </Link>

                <p className="text-[13px]">
                  Population:{" "}
                  <span className="text-gray-400">{country.population} </span>{" "}
                </p>
                <p className="text-[13px]">
                  Region:{" "}
                  <span className="text-gray-400"> {country.region}</span>
                </p>
                <p className="text-[13px]">
                  Capital:{" "}
                  <span className="text-gray-400"> {country.capital}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
