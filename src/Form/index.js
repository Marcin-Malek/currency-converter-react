import "./style.css";

const Form = ({title, amountField, currencyField, button, onFormSubmit, statement}) => {

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <h1 className="form__header">{title}</h1>
                {amountField}
                {currencyField}
                {button}
                {statement}
            </fieldset>
        </form>
    );
}

export default Form;