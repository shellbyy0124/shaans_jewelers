import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    form {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4%;
        input {
            width: 90%;
            height: 5vmin;
            margin-left: auto;
            margin-right: auto;
            border-radius: 20px;
        };
        label {
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        };
        input, label {
            font-size: large;
            margin-top: 2%;
        };
        button {
            width: 74%;
            margin-left: auto;
            margin-right: auto;
            height: 5vmin;
            border-radius: 20px;
            background-color: transparent;
            font-size: large;
        };
    };
`;
export const Title = styled.h1`
    font-size: xxx-large;
`;