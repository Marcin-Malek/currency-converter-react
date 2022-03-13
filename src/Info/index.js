import { StyledInfo } from "./styled";

const Info = ({date}) => {
    return (
        <StyledInfo>Dane walutowe zgodne są z danymi Europejskiego Banku Centralnego na dzień <strong>{date}</strong></StyledInfo>
    )
}

export default Info;