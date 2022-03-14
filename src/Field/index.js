import { Label, Input } from "./styled";

const Field = ({ tagType, label, contentPassed, innerRef, amount, currencies, inputHandler, selectHandler }) => {
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
                currencies={currencies}
                onChange={selectHandler}
            >
                {Object.keys(currencies).map(currency => (
                    <option key={currency}>{currency}</option>
                ))}
            </Input>
        </>
    );
};

export default Field;