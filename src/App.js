import Form from "./Form";
import Field from "./Field";
import Button from "./Button";
import Statement from "./Statement";
import { useRef, useState } from "react";

const currencies = [
  {
    name: "Euro",
    signature: "EUR",
    rate: 4.75
  },
  {
    name: "Dolar amerykański",
    signature: "USD",
    rate: 4.27
  },
  {
    name: "Funt szterling",
    signature: "GBP",
    rate: 5.71
  }];

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState();

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
      inputRef.current.className = "field__input"
    } else {
      inputRef.current.focus();
      inputRef.current.className = "field__input field__input--empty"
    }
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
      amountField={<Field type="input" label="Kwota wpłacona" innerRef={inputRef} amount={amount} inputHandler={inputHandler} />}
      currencyField={<Field type="select" label="Waluta" currencies={currencies} selectHandler={selectHandler} />}
      button={<Button title="Przelicz" />}
      statement={<Statement result={result} />}
      onFormSubmit={onFormSubmit}
    />
  );
}

export default App;
