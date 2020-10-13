import React from 'react'
import { Button, Form } from 'semantic-ui-react';
import Header from '../../components/Header';

const LoginUi= ({
    form:{onChange,form, loginFormValid,error, onSubmit, loading,  },
}) => {

    return (
        <>
     
        <div class="leading-loose flex justify-center ">
      
        <Form className="max-w-xl md:w-1/2 m-4 p-10 bg-white rounded shadow-xl" id="myForm">
        <p class="text-gray-800 text-xl font-medium  mb-4 border-b shadow-sm">Login </p>
         { error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 my-2 text-sm rounded relative" role="alert">
 
    <span class="block sm:inline">{error?.detail}</span>

</div> }
        <div>
        <label className="block text-sm text-gray-800" for="username">UserName</label>
                <Form.Input
                className=""
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                
                  
                />
              </div>
            
            
              <div className="mt-2">
              <label class="block text-sm text-gray-800" for="password">Password</label>
                <Form.Input
                className=""
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                 
                  
                />
              </div>
              <div class="mt-4 w-full">
                  {loading ? 
                 <button type="submit" class=" w-full border border-blue-500  py-1 px-4 flex justify-center items-center cursor-not-allowed  text-white font-light tracking-wider opacity-50  bg-blue-700 rounded" disabled>
              <svg viewBox="0 0 33 33"  className="animate-spin h-8 w-8 mr-3 " fill="#fff">
  <defs/>
  <path d="M21 5a5 5 0 11-9 0 5 5 0 019 0zm-4 23a3 3 0 100 5 3 3 0 000-5zm14-11a2 2 0 10-3 0 2 2 0 003 0zM7 17a3 3 0 10-6 0 3 3 0 006 0zM27 7h-2v2h2V7zM10 24H6v5a3 3 0 004-5zm17 4v-3h-2v3h2zM10 10a3 3 0 00-4-4 3 3 0 004 4z"/>
</svg>
                
               </button>
                   : 
                   <button onClick={onSubmit} className={loginFormValid ? " w-full bg-blue-500 text-white  py-1 px-4 rounded opacity-50 transition-all duration-200 tracking-wider ease-in-out cursor-not-allowed" : "px-4 py-1 w-full transition-all duration-200 ease-in-out hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-blue-700 text-white font-light tracking-wider bg-blue-700 rounded"} type="submit">
                   Submit
               </button>
             
                   
                   }
                     
    </div>
   
        </Form>


        </div>

          
            </>
    )
}

export default LoginUi;
