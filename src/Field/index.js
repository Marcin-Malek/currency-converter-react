import "./style.css";

const Field = ({ type, label, innerRef, currencies, amount, inputHandler, selectHandler }) => {
    if (type === "input") {
        return (
            <>
                <label className="label">{label}:</label>
                <input
                    value={amount}
                    ref={innerRef}
                    onChange={inputHandler}
                    type="number"
                    className="input"
                    min="0"
                    step="any"
                    pattern="[0-9]+([,\.][0-9]+)?"
                />
            </>
        );
    }
    return (
        <>
            <label className="label">{label}:</label>
            <select
                onChange={selectHandler}
                className="input"
            >
                {currencies.map(currency => (
                    <option key={currency.signature}>{currency.name}</option>
                ))}
            </select>
        </>
    );
}

export default Field;