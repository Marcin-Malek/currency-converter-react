import Form from "./Form";
import Info from "./Info";
import { useRef, useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState();
  const [result, setResult] = useState();
  const [contentPassed, setContentPassed] = useState(true);

  const inputRef = useRef();
  
  const [currenciesData, fetchState] = useCurrenciesData(setCurrency);
  const { rates: currencies, date } = currenciesData;
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (amount !== "") {
      setResult(
        {
          sourceAmount: Number(amount),
          currency,
          calculatedAmount: Number(amount) * currencies[currency]
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


  if (fetchState === "resolved") {
    return (
      <Form
        title="Kalkulator wymiany walut"
        result={result}
        amount={amount}
        date={date}
        currencies={currencies}
        contentPassed={contentPassed}
        inputRef={inputRef}
        inputHandler={inputHandler}
        selectHandler={selectHandler}
        onFormSubmit={onFormSubmit}
      />
    );
  } else {
    return (
      <Info fetchState={fetchState} />
    )
  }
};

export default App;
