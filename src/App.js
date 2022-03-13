import Form from "./Form";
import { useRef, useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData";

function App() {
  const currenciesData = useCurrenciesData();
  const { rates }  = currenciesData;
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(Object.keys(rates)[0]);
  const [result, setResult] = useState();
  const [contentPassed, setContentPassed] = useState(true);
  
  const inputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const rateIndex = Object.keys(rates).indexOf(currency);
    if (amount !== "") {
      setResult(
        {
          sourceAmount: Number(amount),
          currency: currency,
          calculatedAmount: Number(amount) / Object.values(rates)[rateIndex]
        }
      );
      setContentPassed(true);
    } else {
      setContentPassed(false);
    }
    inputRef.current.focus();
  }

  const inputHandler = ({ target }) => {
    setAmount(target.value);
  }

  const selectHandler = ({ target }) => {
    setCurrency(Object.keys(rates).find(rate => rate === target.value));
  }

  return (
    <Form
      title="Kalkulator wymiany walut"
      result={result}
      amount={amount}
      contentPassed={contentPassed}
      inputRef={inputRef}
      inputHandler={inputHandler}
      selectHandler={selectHandler}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default App;
