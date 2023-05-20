import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);
  const currencies = [
    { name: "Pound", symbol: "£" },
    { name: "Dollar", symbol: "$" },
    { name: "Euro", symbol: "€" },
    { name: "Rupee", symbol: "₹" },
  ];

  const handleCurrencyChange = (event) => {
    dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
  };

  return (
    <select
      className="btn btn-secondary p-3 container"
      onChange={handleCurrencyChange}
    >
      {currencies.map((currency) => (
        <option
          className=" p-3 m-2"
          key={currency.name}
          value={currency.symbol}
        >
          {currency.symbol} {currency.name}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
