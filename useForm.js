import { useState } from "react"

const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const handleInputChange = ({target})=>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleReset = (target)=>{
        const {name} = target
        setFormState(initialForm)
    }

  return {
        formState,
        handleInputChange,
        handleReset
  }
    
}

export default useForm