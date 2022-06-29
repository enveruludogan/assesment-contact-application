import { Typography, Grid, Card, Box, Input, Button, Stack, TextField } from "@mui/material";
import styled from "styled-components";

const StyleGrid = styled(Grid) <{
    color?: string
    display?: string
    marginTop?: string

}>`
    display: ${({ display }) => display || null};
    color: ${({ color }) => color || null};
    margin-bottom: 20px;
    margin-top:${({ marginTop }) => marginTop || '20px'} ;
    justify-content: center !important;
    align-items: center !important;      
`
const StyleCard = styled(Card)`
    background-color: #F0F0F0 !important;
    height: 300px;
    width: 380px !important;
`

const StyleLogin = styled(Card)`
    background-color: #FFF !important;   
    max-width: 380px;   
    box-shadow: 2px !important;
    justify-items: center !important;
    text-align: center ;
   
`

const StyleStack =styled(Stack)`
    align-items: center !important;
    justify-content: center !important;
    max-width: 350px ;
`

const StyleText = styled(Typography) <{
    paddingBottom?: string
    textAlign?: string
    marginLeft?: string
    justifyContent? :string
}>`
    font-family: monospace !important;
    align-items: center;
    color: whitesmoke;
    padding-bottom:${({ paddingBottom }) => paddingBottom || '15px'} ;
    text-align: ${({ textAlign }) => textAlign || null};
    margin-right: ${({ marginLeft }) => marginLeft || null};
    justify-content :${({ justifyContent }) => justifyContent || null} !important;
`
const StyleInput = styled(Input)`
    max-width: 300px !important;
    margin-bottom: 25px ;
`
const StyleField = styled(TextField)`
padding-bottom: 15px !important;
max-width: 300px ;
color: #0C6767 !important;
`

const StyleButton = styled(Button) <{
    marginTop?: string
    styleColor?: string
    
}>`
    background-color: ${({styleColor}) => styleColor || null} !important;
    width: 90%;
    margin-bottom: 15px !important;
    margin-top: ${({ marginTop }) => marginTop || null} !important;
`

export { StyleGrid, StyleButton, StyleStack, StyleLogin, StyleCard, StyleText,StyleField, StyleInput };


