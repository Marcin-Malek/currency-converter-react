import "./style.css";

const Form = ({title, amountField, currencyField, button, onFormSubmit, statement}) => {

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="fieldset">
                <h1 className="header">{title}</h1>
                {amountField}
                {currencyField}
                {button}
                {statement}
            </fieldset>
        </form>
    );
}

export default Form;