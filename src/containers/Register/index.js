import React , {useEffect} from 'react'
import { register } from '../../context/actions/register'
import RegisterUi from '../../layout/Register'
import useForm from './useForm'

const RegisterContainer = () => {

    useEffect(() => {
      register()
       
    }, [])
    return (
      <RegisterUi form={useForm()} />
    )
}

export default RegisterContainer
