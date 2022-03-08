import { StyledStatement } from "./styled";

const Statement = ({ result }) => (
    !!result && (
        <StyledStatement>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
            <strong>
                {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </StyledStatement>
    )
);

export default Statement;