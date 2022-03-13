import { useEffect, useState } from "react";

export const useCurrenciesData = () => {
  const [currenciesData, setCurrenciesData] = useState(
    !!localStorage.getItem("currenciesData") ?
      JSON.parse(localStorage.getItem("currenciesData"))
      : null
  );

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      const response = await fetch(
        'https://api.exchangerate.host/latest?base=PLN'
      );
      const data = await response.json();
      setCurrenciesData(data);
      localStorage.setItem("currenciesData", JSON.stringify(data));
    };

    if (!currenciesData) {
      console.log("started fetching");
      fetchCurrenciesData();
    }
  });

  return currenciesData;
};