import axios from "axios";
import React from "react";

interface IContact {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
    hideButtons?: boolean;
}
export type TUser = { 
    id: number;
    name: string;
    email: string;
    password: string;

}
export type TUserr = {
    id: number;
    email: string;
    password: string;
}

type TContact = {
    id: number;
    name: string;
    email: string;
    phone: number;
    location: string;
    createDate?: string;
    userId: number;
}

export const updateContact = async (contact: TContact, id: number) => {
    try {
        const { data } = await axios.put(
            `https://localhost:7282/api/Contacts/${id}`,
            { name: contact.name, email: contact.email, phone: contact.phone, location: contact.location, userId: contact.userId },

            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        return error;
    }
}

export const deleteContact = async ( id: number) => {
    try {
        const { data, status } = await axios.delete<IContact>(
            `https://localhost:7282/api/Contacts/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        return error;

    }
}


export const getContact = async () => {
    try {
        let userId = localStorage.getItem('userId')
        const res = await axios.get(`https://localhost:7282/api/Contacts/byUserId/${localStorage.getItem('userId')}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


export const registerSubmit = async (user: TUser) => {
    try {
        await axios.post('https://localhost:7282/api/Users', { ...user })        

        
    } catch (err: any) {
        alert(err.response.data.msg)
    }
}

