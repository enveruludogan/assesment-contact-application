import {  Grid, Typography, Modal, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { StyleGrid, StyleStack, StyleField, StyleButton, StyleText, } from './styled'
import React, { FC, useState } from 'react'
import axios from 'axios';

interface IModal {
    type: 'add' | 'edit';
    contact?: TContact;
}
type TContact = {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    createDate?: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddcontactModal: FC<IModal> = ({ type, contact }) => {
    const [modal, setModal] = useState({
        id: 0, name: '', email: '', phone: '', location: '', userId: localStorage.getItem('userId')
    })
    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setModal({ ...modal, [name]: value })
    }
    const contactsSubmit = async () => {
        try {
            const res = await axios.post('https://localhost:7282/api/Contacts/', { ...modal })
            window.location.href = "/home";
            console.log(res.data);
        } catch (err: any) {
            console.log(err);
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <StyleButton variant="contained"
                onClick={handleOpen}
                marginTop={'20px'} startIcon={<AddIcon />}
                styleColor={'#0c6767'}
            >
                <Typography>
                    Add Contact
                </Typography>
            </StyleButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <StyleGrid sx={style} container xs={12}>

                    <StyleStack direction="column" spacing={2}>

                        <StyleText variant="h5" color="green" >
                            ADD CONTACT
                        </StyleText>

                        <form onSubmit={() => contactsSubmit()}>
                            <Grid container justifyContent={'center'} alignItems={'center'}>

                                <StyleField
                                    fullWidth label="Name" color='success' variant="standard" type="text" id='name' name='name' value={modal.name} focused onChange={onChangeInput}
                                />
                                <StyleField
                                    fullWidth label='Email' type="text" variant="standard" color="success" name='email' id='email' value={modal.email} focused onChange={onChangeInput}
                                />
                                <StyleField
                                    fullWidth label='Phone' variant="standard" type="text" color="success" id="phone" name="phone" value={modal.phone} focused onChange={onChangeInput}
                                />
                                <StyleField
                                    fullWidth label='Location' variant="standard" color="success" id='location' name='location' value={modal.location} focused onChange={onChangeInput}
                                />
                                <StyleButton type='submit' variant="contained" color="success" fullWidth startIcon={<AddIcon />}>
                                    Add Contact
                                </StyleButton>
                            </Grid >
                        </form>
                    </StyleStack>
                </StyleGrid>
            </Modal>
        </>
    )
}


export default AddcontactModal;