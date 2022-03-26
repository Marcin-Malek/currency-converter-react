import { StyledInfo, StyledProgress } from "./styled";

const Info = ({ date, fetchState }) => {
    if (fetchState === "pending") {
        return (
            <>
                <StyledProgress />
                <StyledInfo fetchState={fetchState}>
                    Chwilka cierpliwości &#128578;. Aktualne kursy walut są pobierane.
                </StyledInfo>
            </>
        );
    } else if (fetchState === "rejected") {
        return <StyledInfo fetchState={fetchState}>Coś poszło nie tak &#128577;. Sprawdź czy masz połączenie z internetem.</StyledInfo>
    };

    return (
        <StyledInfo>Dane walutowe zgodne są z danymi Europejskiego Banku Centralnego na dzień <strong>{date}</strong>.</StyledInfo>
    );
};

export default Info;