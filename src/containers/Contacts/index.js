import React , {useContext} from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import getContacts from '../../context/actions/contacts/getContacts'
import {GlobalContext} from '../../context/Provider'
import ContactsListUI from '../../layout/contacts/List'

const ContactsContainer = () => {
    const {contactsDispatch, contactsState} = useContext(GlobalContext)

const history = useHistory()
 useEffect(() => {
getContacts(history)(contactsDispatch);
 }, []);

    console.log("context", contactsDispatch);
    return (
       <ContactsListUI state={contactsState} />
    )
}
 
export default ContactsContainer
