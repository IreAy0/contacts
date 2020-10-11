import React from 'react'
import Header from '../../components/Header';

const RegisterUi= ({form:{onChange,form},}) => {

    
    return (
        <>
        <Header/>
<div class="leading-loose flex justify-center ">
  <form class="max-w-xl md:w-1/2 m-4 p-10 bg-white rounded shadow-xl">
  <p class="text-gray-800 text-xl font-medium  mb-4 border-b shadow-sm">Signup </p>
  <div class="">
      <label class="block text-sm text-gray-00" for="username">UserName</label>
      <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"  
       value={form.username || ""}
       onChange={onChange}
      name="username" 
      type="text"
       required=""
        placeholder="User Name" 
        aria-label="User Name"
      
      />
    </div>
    <div class="">
      <label class="block text-sm text-gray-00" for="firstName">First Name</label>
      <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" name="firstName" type="text" required="" placeholder="first name" aria-label="First Name"
       value={form.firstName || ""}
       onChange={onChange}
      />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="lastName">Last Name</label>
      <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" name="lastName" type="text" required="" placeholder="Your Name" aria-label="Last Name"
       value={form.lastName || ""}
       onChange={onChange}
      />
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="email">Email</label>
      <input class="w-full px-2  py-1 text-gray-700 bg-gray-200 rounded"  name="email" type="email" required="" placeholder="Your Email" aria-label="Email"
       value={form.email || ""}
       onChange={onChange}
      />
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="password">Password</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="password" name="password" type="password" required="" placeholder="*******" aria-label="Password"
       value={form.password || ""}
       onChange={onChange}
      />
    </div>
   
 
    <div class="mt-4 w-full">
      <button class="px-4 py-1 w-full transition-all duration-200 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-blue-700 text-white font-light tracking-wider bg-blue-700 rounded" type="submit">Submit</button>
    </div>
  </form>
</div>
          
          
            </>
    )
}

export default RegisterUi;
