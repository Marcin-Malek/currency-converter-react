import styled, { css } from "styled-components";

export const StyledInfo = styled.p`
    text-align: center;
    font-size: small;
    margin: 0 50px 20px 50px;
    color: ${({ theme }) => theme.color.Emperor};

    ${({ fetchState }) => (fetchState === "pending") && css`
        color: ${({ theme }) => theme.color.PersianBlue};
        font-size: medium;
        font-weight: bold;
        margin-bottom: 40px;
        margin-top: 10px;
    `}

    ${({ fetchState }) => (fetchState === "rejected") && css`
        color: red;
        font-size: medium;
        font-weight: bold;
        margin-bottom: 40px;
        margin-top: 20px;
    `}
`;

export const StyledProgress = styled.progress`
    margin: 10px;
`;