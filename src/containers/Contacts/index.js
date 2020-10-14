import React , {useContext} from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import getContacts from '../../context/actions/contacts/getContacts'
import {GlobalContext} from '../../context/Provider'

const ContactsContainer = () => {
    const context = useContext(GlobalContext)

const history = useHistory()
 useEffect(() => {
getContacts(history);
 }, []);

    console.log("context", context);
    return (
        <div>
            <Header />
            <h1>contacts</h1>
        </div>
    )
}
 
export default ContactsContainer
