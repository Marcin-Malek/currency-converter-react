import styled, { css } from "styled-components";

export const Label = styled.label`
    font-size: small;
    margin: 4px;
`;

export const Input = styled.input`
    display: block;
    width: 60%;
    min-width: 150px;
    flex-basis: 30px;
    border: 1px solid ${({ theme }) => theme.color.PersianBlue};
    border-radius: 4px;
    margin-bottom: 10px;

    ${({ contentPassed, tagType }) => (!contentPassed && tagType === "input" ) && css`
        &:focus {
            outline-color: red;
        }
    `}
`;