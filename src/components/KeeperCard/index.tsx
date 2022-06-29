import { Divider, Grid, Stack, } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyleGrid, StyleText, StyleCard, StyleStack, StyleButton, StyleDivider } from './styled'
import React, { FC, } from 'react';
import Editmodal from '../Modal/Editmodal';
import axios from 'axios';
import moment from 'moment';
import { deleteContact } from '../../services/contactServices';

interface IContact {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
    hideButtons?: boolean;
}

const Keepercard: FC<IContact> = ({ name, email, phone, location, createDate, id, hideButtons }) => {

    return (
        <>
            <StyleGrid xs={12} sm={12} md={6} xl={4} container direction='row'>
                <StyleCard>
                    <StyleText textAlign={'center'} variant="h5">
                        {name}
                        <StyleDivider border={'1px solid #555'} />
                    </StyleText>

                    <Grid container >

                        <StyleGrid item xs={1} color={'#d1bbb1'} >
                            <EmailIcon />
                        </StyleGrid>
                        <Grid item xs={11} >
                            <StyleText marginLeft={'5px'}>
                                {email}
                            </StyleText>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <StyleGrid item xs={1} color={'#d1bbb1'}>
                            <PhoneIcon />
                        </StyleGrid>
                        <Grid item xs={11}>
                            <StyleText marginLeft={'5px'}>
                                {phone}
                            </StyleText>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <StyleGrid item xs={1} color={'#d1bbb1'}>
                            <LocationIcon />
                        </StyleGrid>
                        <Grid item xs={11}>
                            <StyleText marginLeft={'5px'}>
                                {location}
                            </StyleText>
                        </Grid>

                    </Grid>
                    {hideButtons ? null : (
                        <>
                            <Stack direction="column" justifyContent='center' alignItems='center'>
                                <StyleButton
                                    onClick={() => deleteContact(id)}
                                    variant="contained" startIcon={<DeleteIcon />} styleColor={'#98184ae2'}>
                                    Delete
                                </StyleButton>
                                <Editmodal id={id} name={name} email={email} phone={phone} location={location} userId={0} />
                            </Stack>

                        </>
                    )}
                    <StyleDivider />
                    <Stack direction="row" justifyContent='center' alignItems='center'>
                        <StyleText>
                            {moment(createDate).format('MMMM Do YYYY, h:mm:ss a')}
                        </StyleText>
                    </Stack>
                </StyleCard>
            </StyleGrid>

        </>
    )
}

export default Keepercard;
