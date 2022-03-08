import Form from "./Form";
import { useRef, useState } from "react";
import { currencies } from "./currencies"

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState();
  const [contentPassed, setContentPassed] = useState(true);

  const inputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (amount !== "") {
      setResult(
        {
          sourceAmount: Number(amount),
          currency: currency.signature,
          calculatedAmount: Number(amount) / currency.rate
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
    setCurrency(currencies.find(currency => currency.name === target.value));
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
}

export default App;
