import { useState } from "react";
import { useEffect } from "react"

const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async()=>{
        try {
            const resp = await fetch(url);
            const data = await resp.json()
            setState({
                ...state,
                data,
                isLoading: false
            })
        } catch (error) {
            setState({
                ...state,
                hasError: error
            })
        }
    }

    useEffect(() => {
      getFetch()
    }, [url])
    
  return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
  }
}

export default useFetch