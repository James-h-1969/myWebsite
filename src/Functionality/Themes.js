import styled, { createGlobalStyle } from 'styled-components';
import { Image } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color:  ${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  body: '#ededed',
  text: '#424242'
};

export const darkTheme = {
  body: '#424242',
  text: '#ededed'
};


