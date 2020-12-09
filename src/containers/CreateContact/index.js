import React from 'react'
import { useState } from 'react'
import { Form } from 'semantic-ui-react'
import CreateContact from '../../layout/contacts/Create'

const CreateContactsContainer = () => {
    const [ form , setForm] = useState({});

 
    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
      };
    
    
  
    
    return (
           <div>  
               <CreateContact onChange={onChange} form={form} />
           </div>   
           
    )
}

export default CreateContactsContainer