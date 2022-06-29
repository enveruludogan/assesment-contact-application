import { Grid, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StyleGrid, } from './styled'
import AddcontactModal from '../../components/Modal/AddcontactModal';
import Keepercard from '../../components/KeeperCard';
import { getContact } from '../../services/contactServices';

interface IContact {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
}

const AddContact = () => {

    useEffect(() => {
        getContacts();
    }, []);

    const [contacts, setContacts] = useState<IContact[]>([]);
    const getContacts = async () => {
        setContacts(await getContact())
    }
    return (
        <>
            <StyleGrid marginTop={'0'} container>
                <AddcontactModal type={'add'} />
                <Grid xs={12}>
                    <StyleGrid container>
                        {contacts.map((contact) => {
                            return (
                                <Keepercard
                                    name={contact.name}
                                    email={contact.email}
                                    phone={contact.phone}
                                    location={contact.location}
                                    createDate={contact.createDate}
                                    id={contact.id}

                                />
                            )
                        })}
                    </StyleGrid >
                </Grid>
            </StyleGrid>

        </>
    )
}
export default AddContact