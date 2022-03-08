import "./style.css";
import { currencies } from "../currencies";

const Field = ({ type, label, innerRef, amount, inputHandler, selectHandler }) => {
    if (type === "input") {
        return (
            <>
                <label className="field__label">{label}:</label>
                <input
                    value={amount}
                    ref={innerRef}
                    onChange={inputHandler}
                    type="number"
                    className="field__input"
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
            <label className="field__label">{label}:</label>
            <select
                onChange={selectHandler}
                className="field__input"
            >
                {currencies.map(currency => (
                    <option key={currency.signature}>{currency.name}</option>
                ))}
            </select>
        </>
    );
}

export default Field;