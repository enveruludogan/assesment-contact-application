import styled from "styled-components"
import { Typography, Grid, Card, Box, Input, Button, Stack, TextField, Divider } from "@mui/material";


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
    padding: 0 8px 0 8px !important; 
`
const StyleCard = styled(Card)`
    background-color: #eee8e1 !important;
    max-height: 315px;
    width: 380px !important;
`
const StyleText = styled(Typography) <{
    paddingBottom?: string
    textAlign?: string
    marginLeft?: string
    justifyContent?: string
}>`
    font-family: monospace !important;
    align-items: center;
    color: #2f5c6c;
    padding-bottom:${({ paddingBottom }) => paddingBottom || '15px'} ;
    text-align: ${({ textAlign }) => textAlign || null};
    margin-right: ${({ marginLeft }) => marginLeft || null};
    justify-content :${({ justifyContent }) => justifyContent || null} !important;
`
const StyleButton = styled(Button) <{
    marginTop?: string
    styleColor?: string
}>`
    background-color: ${({ styleColor }) => styleColor || null} !important;
    width: 90%;
    margin-bottom: 10px !important;
    margin-top: ${({ marginTop }) => marginTop || null} !important;
`
const StyleStack = styled(Stack)`
    align-items: center !important;
    justify-content: center !important;
    max-width: 350px ;
`
const StyleDivider = styled(Divider) <{
    border?: string
}>`
    border: ${({ border }) => border || null} !important;
    margin-bottom: 8px !important;

`
export { StyleGrid, StyleDivider, StyleCard, StyleText, StyleButton, StyleStack }