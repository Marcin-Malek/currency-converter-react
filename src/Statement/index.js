import "./style.css";

const Statement = ({ result }) => (
    !!result && (
        <p className="statement">
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
            <strong>
                {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </p>
    )
);

export default Statement;