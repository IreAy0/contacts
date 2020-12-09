import React from 'react'
import Header from '../../../components/Header'


const CreateContact = ( {onChange}) => {
    return (
              <div>
                 <Header />
                 <form action="" class="form bg-white p-6 my-10 relative max-w-2xl m-auto">
               
              
               <h3 class="text-2xl text-gray-800 font-semibold">Create new contact</h3>

               <div className="w-1/3 h-24 my-2 m-auto border-gray-500 flex justify-center items-center  border-dashed border-2">
                      <span>Choose Picture</span>
               </div>
               <div class="flex space-x-5 mt-3">
                   <input type="text" 
                   name="firstName" 
                   id="" 
                   placeholder="First Name" 
                   class="border p-2  w-1/2" 
                   onChange={onChange}
                   />

                   <input 
                   type="text" 
                   name="lastName" 
                   id="" 
                   placeholder="Last Name"
                  class="border p-2 w-1/2" 
                  onChange={onChange}
                    />
               </div>
               <div class="flex space-x-5 mt-3">
                   <input type="text" 
                   name= "countryCode" 
                   id=""
                  placeholder="Country" 
                  class="border p-2  w-1/2"
                  onChange={onChange}
                  />

                   <input
                    type="tel" 
                    name="phoneNumber" 
                    id="" 
                    placeholder="Phone Number" 
                    class="border p-2 w-1/2"
                    onChange={onChange}
                    />
               </div> 
               <div class="flex items-baseline space-x-2 mt-2">
                    <input type="checkbox"
                     name="isFavorite " 
                     id="" 
                     class="inline-block" 
                     onChange={onChange}
                     />
                    <p class="text-gray-600 text-base font-semibold">Add to favourites</p>
                </div>
              
               <button  class="w-14 rounded-sm mt-2 bg-gray-500 hover:bg-blue-500 text-gray-900 font-semibold p-2" > Submit</button>
             
           </form>
               </div>
           )
}



export default CreateContact


