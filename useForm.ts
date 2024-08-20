import { useState } from 'react'

export const useForm = ( initialForm={} ) => {

    const [formState, setformState] = useState (initialForm);
    /**
     * {
        userName: 'julian',
        email:'romanco@gmail.com',
        password:''
    }
     */

    //const { userName, email, password} = formState;

    const onInputChange =(event:any)=>{
        const {name, value} = event.target;
        //console.log(name, value);
        setformState({
            ...formState,
            [name]:value
        })
    }

    const onResetForm = () => {
        setformState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    } 
}
