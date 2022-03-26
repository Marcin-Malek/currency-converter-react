import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 600px;
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.AthensGray};
    border: 3px solid ${({ theme }) => theme.color.PersianBlue};
    border-radius: 20px;
`;

export const Header = styled.h1`
    font-size: 20pt;
    text-align: center;
    color: ${({ theme }) => theme.color.PersianBlue};
`;

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

    ${({ contentPassed, type }) => (!contentPassed && type === "number" ) && css`
        &:focus {
            outline-color: red;
        }
    `}
`;

export const Button = styled.button`
    width: 90%;
    min-width: 150px;
    flex-basis: 30px;
    margin: 20px;
    background-color: ${({ theme }) => theme.color.PersianBlue};
    border-radius: 4px;
    border: none;
    box-shadow: 1px 0.5px 2px black;
    color: white;   
    transition: box-shadow 100ms, filter 1s, transform 1s;

    &:hover {
        transform: scale(1.1);
        filter: brightness(140%);
    }

    &:active {
        box-shadow: 0px 0px 2px black;
    }
`;