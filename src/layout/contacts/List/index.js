import React from 'react'
import Header from '../../../components/Header'

const ContactsListUI = ({state:
     {contacts: {loading, error,data}}
    }) => {
    return (
        <div>
            <Header />
            <div className="mt-4 mx-5">
            {
                loading ? 
                <div class=" mt-4   rounded-md p-4 mx-1 md:mx-auto my-2 max-w-md md:max-w-2xl ">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-gray-400 h-12 w-12"></div>
                  <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div class="space-y-2">
                      <div class="h-4 bg-gray-400 rounded"></div>
                      <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>:
          
             <div class="w-full max-w-screen-xl mx-auto md:px-6">
               <div class="relative rounded overflow-hidden  mb-8 ">
               {data.length && data.map((contact) => (


<div class="flex  bg-white shadow-lg cursor-pointer  rounded-lg mx-1 md:mx-auto my-2 max-w-md md:max-w-2xl ">
   <div class="flex items-center flex-grow px-4 py-2">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src={contact.contact_picture} alt={contact.first_name} />
      <div class=" flex flex-grow justify-between">
         <div class="">
            <h2 class="text-base  text-gray-900">{contact.first_name} {contact.last_name} </h2>
            
         </div>
         <div class="">
            <h2 class="text-base  text-gray-900 ">{contact.phone_number}</h2>
            
         </div>
       </div>
   </div>
</div>
 
             
             )

                        )}
             </div>
             </div>
            }
            </div>
         
        </div>
    )
}

export default ContactsListUI
