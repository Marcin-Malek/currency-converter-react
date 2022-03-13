import Form from "./Form";
import { useRef, useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData";

function App() {
  const currenciesData = useCurrenciesData();
  const { rates: currencies, date } = currenciesData;
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(Object.keys(currencies)[0]);
  const [result, setResult] = useState();
  const [contentPassed, setContentPassed] = useState(true);

  const inputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (amount !== "") {
      const currencyIndex = Object.keys(currencies).indexOf(currency);
      setResult(
        {
          sourceAmount: Number(amount),
          currency,
          calculatedAmount: Number(amount) * Object.values(currencies)[currencyIndex]
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
    setCurrency(Object.keys(currencies).find(currency => currency === target.value));
  }

  return (
    <Form
      title="Kalkulator wymiany walut"
      result={result}
      amount={amount}
      date={date}
      contentPassed={contentPassed}
      inputRef={inputRef}
      inputHandler={inputHandler}
      selectHandler={selectHandler}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default App;
