import React, { useState } from 'react'
import { StyleLogin, StyleGrid, StyleText, StyleButton, StyleField, StyleStack } from './styled'
import { registerSubmit, TUser } from '../../services/contactServices';
import { Grid } from '@mui/material';

const Register = () => {
    const [user, setUser] = useState<TUser>({
        id: 0, name: '', email: '', password: '',
    })
    const [id, setId] = useState<Number>();
    const [name, setName] = useState<String>();

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const register = async () => {
        await registerSubmit(user)
        window.location.href = "/";

    }

    return (
        <>
            <StyleGrid direction="column" container marginTop={'11%'}>
                <StyleLogin>
                    <StyleStack
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid container justifyContent={'center'} alignItems={'center'}>
                            <StyleText variant='h6' color='secondary'>Register</StyleText>
                            <StyleField type="text" name="name" required variant='standard' label="İsim" value={user.name} fullWidth onChange={(e) => onChangeInput(e)} />
                            <StyleField label='e-mail' name='email' variant='standard' required type='email' value={user.email} fullWidth onChange={(e) => onChangeInput(e)} />
                            <StyleField label='password' variant='standard' name='password' required type='password' value={user.password} fullWidth onChange={(e) => onChangeInput(e)} />
                            <StyleButton variant='contained' onClick={() => register()} color='secondary'>Register</StyleButton>
                        </Grid>
                    </StyleStack>
                </StyleLogin>
            </StyleGrid>
        </>
    )
}

export default Register