import styled, { css } from "styled-components";

export const StyledInfo = styled.p`
    text-align: center;
    font-size: small;
    margin: 0 50px 20px 50px;
    color: #555;

    ${({ fetchState }) => (fetchState === "pending") && css`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 600px;
        margin: auto;
        padding: 50px;
        background-color: hsl(226, 21%, 90%);
        color: #1a28ad;
        font-size: medium;
        font-weight: bold;
        border: 3px solid #1a28ad;
        border-radius: 20px;
    `}

    ${({ fetchState }) => (fetchState === "rejected") && css`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 600px;
        margin: auto;
        padding: 50px;
        background-color: hsl(226, 21%, 90%);
        color: red;
        font-size: medium;
        font-weight: bold;
        border: 3px solid #1a28ad;
        border-radius: 20px;
    `}
`;

export const StyledProgress = styled.progress`
    margin: 20px;
`;