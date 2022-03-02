import "./style.css";

const Statement = ({ result }) => {
    if (result.value) {
        return <p className="statement">{result.from} = <strong>{result.value.toFixed(2)} {result.to}</strong></p>;
    }
    return null;
}

export default Statement;