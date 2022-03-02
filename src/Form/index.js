import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <h1 className="form__header">Kalkulator wymiany walut</h1>
            <label className="form__label" for="from">Kwota wpłacona:</label>
            <input type="number" id="value" name="value" className="form__input" min="0" step="any"
                pattern="[0-9]+([,\.][0-9]+)?" />
            <label className="form__label" for="from">Waluta:</label>
            <select name="currency" className="form__input">
                <option value="EUR">Euro</option>
                <option value="USD">Dolar amerykański</option>
                <option value="GBP">Funt szterling</option>
            </select>
            <button className="form__button">Przelicz</button>
        </fieldset>
    </form>
)

export default Form;