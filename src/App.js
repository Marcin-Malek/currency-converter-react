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
  const [currency, setCurrency] = useState(
    {
      name: "Euro",
      signature: "EUR",
      rate: 4.5
    });
  const [result, setResult] = useState(
    {
      from: "PLN",
      to: "EUR",
      value: undefined
    });

  const inputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (amount !== "") {
      setResult(
        {
          from: `${amount} PLN`,
          to: currency.signature,
          value: Number(amount) / currency.rate
        }
      );
      inputRef.current.className = "input"
    } else {
      inputRef.current.focus();
      inputRef.current.className = "input empty"
    }
  }

  const inputHandler = ({ target }) => {
    setAmount(target.value);
  }

  const selectHandler = ({ target }) => {
    setCurrency(currencies.find(currency => currency.name === target.value))
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
