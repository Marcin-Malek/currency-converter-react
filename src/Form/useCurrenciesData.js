import { useEffect, useState } from "react";

export const useCurrenciesData = () => {
  const [fetchState, setfetchState] = useState("pending");
  const [currenciesData, setCurrenciesData] = useState({});

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate.host/latest?base=PLN',
          /* {cache: "no-store"} */
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setCurrenciesData(data);
        setTimeout(() => setfetchState("resolved"), 500);
      } catch (error) {
        setfetchState("rejected");
        console.error(error);
      }
    };

    fetchCurrenciesData();
  }, []);

  return [currenciesData, fetchState];
};