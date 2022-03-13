import { useEffect, useState } from "react";

export const useCurrenciesData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchCurrenciesData = async () => {
          const response = await fetch(
              'https://api.exchangerate.host/latest?base=PLN'
          );
          const data = await response.json();
          setData(data);
      };

      fetchCurrenciesData();
  }, []);

  return data;
};