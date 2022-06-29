import styled from "styled-components"
import { Typography, Grid, Card, Box, Input, Button, Stack, TextField, MenuItem, Link } from "@mui/material";


const StyleGrid = styled(Grid)`
background-color: #9FC9DD;
height: 80px;
background-image: linear-gradient(#9FC9DD, #9ab4b3);
box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const StyleButton = styled(Button)`
font-size: 14px !important;
font-weight: 700 !important;
font-family: Mulish !important;
color: white;
text-decoration: none;
`
const StyleLink = styled(Link)`
    text-decoration: none !important;
    color: #67696f !important;

`

const StyleText = styled(Typography)`
font-size: 14px !important;
font-weight: 700 !important;
font-family: Mulish !important;
color: white;
text-decoration: none;
`
const StyleMenuText = styled(Typography)`
    font-family: Mulish !important;
    text-transform: uppercase;
    font-size: 18px !important;
`
const StyleLogoGrid = styled(Grid)`
padding-left: 1.7px;
align-items: center;
justify-content: flex-start;
color: whitesmoke;
`
const StyleButtonGrid =styled(Grid)`
padding-right: 1.7px;
`

export { StyleButton, StyleButtonGrid, StyleLogoGrid, StyleLink, StyleMenuText, StyleGrid, StyleText, }