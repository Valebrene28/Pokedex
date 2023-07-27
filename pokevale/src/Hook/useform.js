import { useState } from "react";

const useForm = (initialform = {}) => {
    const [status, setstatus] = useState(initialform)

    
    const change = ({target}) =>{
        const {name, value} = target
        setstatus ({
            ...status,
            [name]: value
        })
    }
    const reset = () => {
        setstatus(initialform)  

    }

    return {
        ...setstatus,
        setstatus,
        change,
        reset,

    }

}

export default useForm


