import Keepercard from '../../components/KeeperCard';
import React, { useEffect, useState ,FC} from 'react';
import { StyleGrid } from './styled';
import { getContact } from '../../services/contactServices';

interface IContact  {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
}

const Home = () => {
  
    useEffect(() => {
        getContacts();
    }, []);

    const [contacts, setContacts] = useState<IContact[]>([]);
    const getContacts = async () => {
        setContacts(await getContact())
    }

    return (
        <>
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
                            hideButtons
                            />
                    )
                })}
            </StyleGrid >
        </>
    )
}

export default Home