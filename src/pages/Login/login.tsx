import React, { useState } from 'react'
import { StyleCard, StyleGrid, StyleText, StyleButton, StyleStack, StyleField } from './styled'
import axios from 'axios';


const login = () => {

    const [user, setUser] = useState({
        email: '', password: ''
    })

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            const userData = await axios.post('https://localhost:7282/api/Users/api/Users/login', { ...user })

            localStorage.setItem('userId', userData.data.id)

            window.location.href = "/addcontact";
        } catch (err: any) {
            alert('Girmiş olduğunuz Mail adresi veya Şifre hatalı lütfen tekrar deneyiniz.')
        }
    }
    return (
        <>
            <StyleGrid container direction="column" marginTop={'11%'}>
                <StyleCard>
                    <StyleStack
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <form onSubmit={loginSubmit}>
                            <StyleText variant='h6' color='green'>Login</StyleText>
                            <StyleField label='e-posta' type='text' variant='standard' name='email' fullWidth value={user.email} required onChange={onChangeInput} />
                            <StyleField label='password' variant='standard' type='password' name='password' fullWidth value={user.password} required onChange={onChangeInput} />
                            <StyleButton variant='contained' type='submit' color='secondary'>Login</StyleButton>
                            <StyleButton variant='contained' color='info' href='/register'>Register</StyleButton>
                        </form>
                    </StyleStack>
                </StyleCard>
            </StyleGrid>
        </>
    )
}

export default login