import { Label, Input } from "./styled";
import { useCurrenciesData } from "../useCurrenciesData";

const Field = ({ tagType, label, contentPassed, innerRef, amount, inputHandler, selectHandler }) => {
    const currenciesData = useCurrenciesData();
    const { rates } = currenciesData;
    if (tagType === "input") {
        return (
            <>
                <Label>{label}:</Label>
                <Input
                    value={amount}
                    ref={innerRef}
                    contentPassed={contentPassed}
                    onChange={inputHandler}
                    tagType={tagType}
                    type="number"
                    placeholder="Wpisz kwotę w PLN"
                    min="0"
                    step="any"
                    pattern="[0-9]+([,\.][0-9]+)?"
                />
            </>
        );
    }
    return (
        <>
            <Label>{label}:</Label>
            <Input
                as="select"
                tagType={tagType}
                onChange={selectHandler}
            >
                {Object.keys(rates).map(rate => (
                    <option key={rate}>{rate}</option>
                ))}
            </Input>
        </>
    );
};

export default Field;