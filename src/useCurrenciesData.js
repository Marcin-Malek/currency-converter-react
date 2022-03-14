import { useEffect, useState } from "react";

export const useCurrenciesData = (setCurrency) => {
  const [fetchState, setfetchState] = useState("pending");
  const [currenciesData, setCurrenciesData] = useState({});

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate.host/latest?base=PLN'
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setCurrency(Object.keys(data["rates"])[0]);
        setCurrenciesData(data);
        setTimeout(() => setfetchState("resolved"), 500);
      } catch (error) {
        setfetchState("rejected");
        console.error(error);
      }
    };

    fetchCurrenciesData();
  }, [setCurrency]);

  return [currenciesData, fetchState];
};