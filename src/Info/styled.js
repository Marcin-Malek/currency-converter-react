import styled, { css } from "styled-components";

export const StyledInfo = styled.p`
    text-align: center;
    font-size: small;
    margin: 0 50px 20px 50px;
    color: ${({ theme }) => theme.color.Emperor};

    ${({ fetchState }) => (fetchState === "pending") && css`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 600px;
        margin: auto;
        padding: 50px;
        background-color: ${({ theme }) => theme.color.AthensGray};
        color: ${({ theme }) => theme.color.PersianBlue};
        font-size: medium;
        font-weight: bold;
        border: 3px solid ${({ theme }) => theme.color.PersianBlue};
        border-radius: 20px;
    `}

    ${({ fetchState }) => (fetchState === "rejected") && css`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        max-width: 600px;
        margin: auto;
        padding: 50px;
        background-color: ${({ theme }) => theme.color.AthensGray};
        color: red;
        font-size: medium;
        font-weight: bold;
        border: 3px solid ${({ theme }) => theme.color.PersianBlue};
        border-radius: 20px;
    `}
`;

export const StyledProgress = styled.progress`
    margin: 20px;
`;