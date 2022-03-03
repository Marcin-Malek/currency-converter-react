import "./style.css";

const Statement = ({ result }) => {
    if (!!result) {
        return (
            <p className="statement">
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </p>
        );
    }
    return null;
}

export default Statement;