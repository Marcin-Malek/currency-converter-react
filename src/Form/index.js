import { useRef, useState } from "react";
import { useCurrenciesData } from "../useCurrenciesData";
import Info from "../Info";
import Field from "../Field";
import Statement from "../Statement";
import Clock from "../Clock";
import { StyledForm, Fieldset, Header, Button } from "./styled";

const Form = ({ title }) => {
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

    return (fetchState === "resolved" && (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Clock />
                <Header>{title}</Header>
                <Field
                    tagType="input"
                    label="Kwota wpłacona (PLN)"
                    contentPassed={contentPassed}
                    innerRef={inputRef}
                    amount={amount}
                    inputHandler={inputHandler}
                />
                <Field
                    tagType="select"
                    label="Waluta"
                    currencies={currencies}
                    selectHandler={selectHandler}
                />
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
                    <Statement result={result} />
                </Fieldset>
            </StyledForm>
        )
};

export default Form;