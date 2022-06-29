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

export {StyleGrid}