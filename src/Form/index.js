import { useRef, useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData";
import Info from "./Info";
import Statement from "./Statement";
import Clock from "./Clock";
import { StyledForm, Fieldset, Header, Label, Input, Button } from "./styled";

const Form = ({ title }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const [contentPassed, setContentPassed] = useState(true);

    const inputRef = useRef();

    const [currenciesData, fetchState] = useCurrenciesData();
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

    return (fetchState === "resolved" && (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Clock />
                <Header>{title}</Header>
                <Label>Kwota wpłacona (PLN):</Label>
                <Input
                    value={amount}
                    ref={inputRef}
                    contentPassed={contentPassed}
                    onChange={inputHandler}
                    type="number"
                    placeholder="Wpisz kwotę w PLN"
                    min="0"
                    step="any"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    autoFocus
                />
                <Label>Waluta:</Label>
                <Input
                    as="select"
                    value={currency}
                    onChange={selectHandler}
                >
                    {Object.keys(currencies).map(currency => (
                        <option key={currency}>
                            {currency}
                        </option>
                    ))}
                </Input>
                <Button>Przelicz</Button>
                <Info date={date} fetchState={fetchState} />
                <Statement result={result} />
            </Fieldset>
        </StyledForm>
    )
    ) || (
            <StyledForm onSubmit={onFormSubmit}>
                <Fieldset>
                    <Clock />
                    <Header>{title}</Header>
                    <Info date={date} fetchState={fetchState} />
                </Fieldset>
            </StyledForm>
        )
};

export default Form;