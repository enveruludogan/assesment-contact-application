import {  Grid, Modal, } from '@mui/material'
import React, { FC, useState } from 'react'
import { StyleGrid, StyleStack, StyleText, StyleButton, StyleField } from './styled'
import EditIcon from '@mui/icons-material/ModeEdit';
import { updateContact } from '../../services/contactServices';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width: '450px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


type IContact = {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
    userId: number;
}

const Editmodal: FC<IContact> = ({ id }) => {
    const [modal, setModal] = useState<IContact>({
        id: 0, name: '', email: '', phone: 0, location: '', userId: parseInt(localStorage.getItem('userId') || '0')

    })
    
    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setModal({ ...modal, [name]: value })
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <StyleGrid sx={style} container xs={12}>
                    <StyleStack direction="column" spacing={2}>
                        <StyleText variant="h5" color="orange" >
                            Edit Contact
                        </StyleText>
                        <Grid container justifyContent={'center'} alignItems={'center'}>
                        <StyleField
                            fullWidth label="Name" variant="standard" type="text" color='warning' value={modal.name} id='name' name='name' focused onChange={onChangeInput} />
                        <StyleField
                            fullWidth label="Email" type="text" variant="standard" color="warning" value={modal.email} name='email' id='email' focused onChange={onChangeInput} />
                        <StyleField
                            fullWidth label="Phone" variant="standard" type="number" id="phone" color="warning" value={modal.phone} name="phone" focused onChange={onChangeInput} />
                        <StyleField
                            fullWidth label="Location" variant="standard" color="warning" id='location' value={modal.location} name='location' focused onChange={onChangeInput} />
                        <StyleButton onClick={() => updateContact(modal, id)} variant="contained" color="warning" startIcon={<EditIcon />}>
                            Edit Contact
                        </StyleButton>
                        </Grid>
                    </StyleStack>
                </StyleGrid>
            </Modal>
            <StyleButton variant="contained" onClick={handleOpen} startIcon={<EditIcon />} styleColor={'#053f5e'} >
                Edit
            </StyleButton>
        </>
    )
}

export default Editmodal


