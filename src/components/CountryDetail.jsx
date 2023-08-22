import React from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CountryDetail({ data, toggle }) {
  const { countryId } = useParams();

  console.log(countryId);
  const country = data?.find((country) => {
    console.log(country.ccn3);
    return country.ccn3 === countryId;
  });

  console.log(country);

  if (!country) {
    return <div>Country not found</div>;
  }
  return (
    <div className={`${toggle ? "bg-slate-800" : null} h-screen`}>
      <Link to="/">
        <div
          className={`sm:ml-32 sm:mt-16 rounded-lg flex items-center ${
            toggle ? "bg-slate-900 text-white " : "bg-white"
          }  p-2 ml-10 mt-10 shadow w-[80px]`}
        >
          <AiOutlineArrowLeft />
          <p className="ml-2">Back</p>
        </div>
      </Link>
      <div className="sm:flex justify-around  items-center  sm:mt-16 mt-8">
        <div className=" px-6 sm:w-[500px] sm:px-0">
          <img src={country?.flags.png} alt="" className="w-full rounded-lg" />
        </div>
        <div
          className={` px-6 sm:px-0 grid content-between  h-[240px] w-[600px] ${
            toggle ? "text-white" : ""
          }`}
        >
          <h1 className="text-xl font-bold py-6 sm:py-0">
            {country?.name.official}
          </h1>

          <div className="sm:flex  justify-between  ">
            <div>
              <div>
                Native Name:{" "}
                <span className="text-gray-500">{country?.name.official}</span>
              </div>
              <div className="pt-2">
                Region: <span className="text-gray-500">{country?.region}</span>{" "}
              </div>
              <div className="pt-2">
                Sub Region:{" "}
                <span className="text-gray-500">{country?.subregion}</span>{" "}
              </div>
              <div className="py-2">
                Capital:{" "}
                <span className="text-gray-500">
                  {country?.capital.join(",")}
                </span>{" "}
              </div>
            </div>
            <div className="py-10 sm:py-0">
              <div>
                Top Level Domain:{" "}
                <span className="text-gray-500">{country?.tld}</span>{" "}
              </div>
              <div className="py-2">
                Currencies:{" "}
                <span className="text-gray-500">
                  {Object.entries(country.currencies).map(
                    ([code, currency]) => (
                      <span key={code}>
                        {currency.name} ({currency.symbol})
                        {Object.keys(country.currencies).length > 1 ? ", " : ""}
                      </span>
                    )
                  )}
                </span>{" "}
              </div>
              <div>
                Languages:{" "}
                <span className="text-gray-500">
                  {" "}
                  {Object.values(country.languages)
                    .map((language) => language)
                    .join(", ")}
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="py-2 sm:py-0">
            <p>
              <span className="font-bold block sm:inline pb-4 sm:pb-0">
                Border Countries:
              </span>
              {country?.borders?.map((item) => {
                return (
                  <span className="border p-1 px-4 shadow ml-2">{item}</span>
                );
              })}
              {/* <span className="border p-1 px-4 shadow ml-2">
                {country?.borders[0]}
              </span>{" "}
              <span className="border p-1 px-4 shadow ml-2">
                {country?.borders[1]}
              </span>{" "}
              <span className="border p-1 px-4 shadow ml-2">
                {country?.borders[2]}
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
