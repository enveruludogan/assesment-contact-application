import React, { FC,} from "react";
import {  Grid, Link,  IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { StyleButton, StyleButtonGrid, StyleGrid, StyleLink, StyleLogoGrid, StyleMenuText, StyleText } from "./styled";

const Navbar: FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <StyleGrid sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
                container direction={'row'}>
                <StyleLogoGrid container direction='row' xs={2}>
                    <CalendarMonthIcon sx={{ width: '35px', height: '35px' }} />
                </StyleLogoGrid>
                <Grid alignItems={'center'} justifyContent={'flex-end'} container xs={10}>
                    {localStorage.getItem('userId') ? (
                        <>
                            <StyleButtonGrid item>
                                <Link sx={{ textDecoration: 'none' }} href={'/home'}>
                                    <StyleButton variant="text">
                                        <StyleText>Home Page</StyleText>
                                    </StyleButton>
                                </Link>
                            </StyleButtonGrid>
                            <StyleButtonGrid item>
                                <Link sx={{ textDecoration: 'none' }} href={'/addcontact'}>
                                    <StyleButton  variant="text" >
                                        <StyleText>Add Contact</StyleText>
                                    </StyleButton>
                                </Link>
                            </StyleButtonGrid>
                        </>
                    ) : null}
                    {localStorage.getItem('userId') ? (
                        <StyleButtonGrid item>
                            <Link sx={{ textDecoration: 'none' }} href={'/'}>
                                <StyleButton  variant="text" onClick={() => window.localStorage.clear()}>
                                    <StyleText>Logout</StyleText>
                                </StyleButton>
                            </Link>
                        </StyleButtonGrid>
                    ) : (
                        <>
                            <StyleButtonGrid item>
                                <Link sx={{ textDecoration: 'none' }} href={'/register'}>
                                    <StyleButton variant="text" >
                                        <StyleText>Register</StyleText>
                                    </StyleButton>
                                </Link>
                            </StyleButtonGrid>
                            <StyleButtonGrid item>
                                <Link sx={{ textDecoration: 'none' }} href={'/'}>
                                    <StyleButton variant="text" >
                                        <StyleText>Login</StyleText>
                                    </StyleButton>
                                </Link>
                            </StyleButtonGrid>
                        </>
                    )}
                </Grid>
            </StyleGrid>

            {/* Mobile Menu */}
            <StyleGrid sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' } }}
                container direction={'row'} >
                <StyleLogoGrid container direction='row' xs={2}>
                    <CalendarMonthIcon sx={{ width: '30px', height: '30px' }} />
                </StyleLogoGrid>
                <Grid container xs={10} alignItems={'center'}>
                    <Grid item xs={12}>
                        <IconButton
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={() => handleOpen()}
                            sx={{ float: 'right' }}>
                            <MenuIcon sx={{ color: '#fff' }} fontSize="large" />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            open={open}
                            onClose={() => handleOpen()}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}>
                            {localStorage.getItem('userId') ? (
                                <>
                                    <MenuItem>
                                        <StyleLink href={'/home'}>
                                            <StyleMenuText>Home Page</StyleMenuText>
                                        </StyleLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <StyleLink href={'/addcontact'}>
                                            <StyleMenuText>Add Contact</StyleMenuText>
                                        </StyleLink>
                                    </MenuItem>
                                </>
                            ) : null}
                            {localStorage.getItem('userId') ? (
                                <MenuItem>
                                    <StyleLink href={'/'}>
                                        <StyleMenuText onClick={() => window.localStorage.clear()}>Logout</StyleMenuText>
                                    </StyleLink>
                                </MenuItem>
                            ) : (
                                <>
                                    <MenuItem>
                                        <StyleLink  href={'/'}>
                                            <StyleMenuText>Login</StyleMenuText>
                                        </StyleLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <StyleLink  href={'/register'}>
                                            <StyleMenuText>Register</StyleMenuText>
                                        </StyleLink>
                                    </MenuItem>
                                </>
                            )}
                        </Menu>
                    </Grid>
                </Grid>
            </StyleGrid>
        </>
    )
}
export default Navbar;