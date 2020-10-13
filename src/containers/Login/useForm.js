import { useEffect } from "react";
import  { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../context/actions/auth/login";
// import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {

    const [form, setForm] = useState({});
    const history = useHistory()
    const {
        authDispatch, 
        authState:{
            auth: {loading, error,data}
        }
    } = useContext(GlobalContext)

    console.log("authstate", loading );

    // useEffect(() => {
     
    //     if(data){
    //         history.push("/auth/login")
    //     }
    // }, [data])



    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
      };

      const loginFormValid = 
      !form.username?.length || 
   
      !form.password?.length;
     
    console.log("form", form);


  const onSubmit = () => {
   login(login)(authDispatch)
    // register(form)(authDispatch)
}

    return{form, onChange, loginFormValid,error, onSubmit, loading,  };
}