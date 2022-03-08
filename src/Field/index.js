import { currencies } from "../currencies";
import { Label, Input } from "./styled";

const Field = ({ tagType, label, contentPassed, innerRef, amount, inputHandler, selectHandler }) => {
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
                {currencies.map(currency => (
                    <option key={currency.signature}>{currency.name}</option>
                ))}
            </Input>
        </>
    );
};

export default Field;