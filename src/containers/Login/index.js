import React , {useEffect} from 'react'
import LoginUi from '../../layout/Login'
import useForm from './useForm'

const LoginContainer = () => {

    useEffect(() => {
    
    }, [])
    return (
      <LoginUi form={useForm()} />
    )
}

export default LoginContainer
