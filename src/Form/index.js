import Field from "../Field";
import Statement from "../Statement";
import Clock from "../Clock";
import Info from "../Info";
import { StyledForm, Fieldset, Header, Button } from "./styled";

const Form = ({ title, result, amount, date, currencies, contentPassed, inputRef, onFormSubmit, inputHandler, selectHandler }) => (
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
            <Info date={date}/>
            <Statement result={result} />
        </Fieldset>
    </StyledForm>
);

export default Form;