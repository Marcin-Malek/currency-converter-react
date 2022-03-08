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
    border: 1px solid #1a28ad;
    border-radius: 4px;
    margin-bottom: 10px;

    ${({ contentPassed }) => !contentPassed && css`
        &:focus {
            outline-color: red;
        }
    `}
`;