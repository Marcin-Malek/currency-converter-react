import "./style.css";
import Field from "../Field";
import Statement from "../Statement";

const Form = ({ title, result, amount, inputRef, onFormSubmit, inputHandler, selectHandler }) => (
    <form onSubmit={onFormSubmit} className="form">
        <fieldset className="form__fieldset">
            <h1 className="form__header">{title}</h1>
            <Field type="input" label="Kwota wpłacona" innerRef={inputRef} amount={amount} inputHandler={inputHandler} />
            <Field type="select" label="Waluta" selectHandler={selectHandler} />
            <button className="form__button">{title}</button>
            <Statement result={result} />
        </fieldset>
    </form>
);

export default Form;