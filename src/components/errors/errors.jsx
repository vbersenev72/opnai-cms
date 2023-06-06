import axios from "axios"
import React, { useEffect, useState } from "react"
import Error from "../error/error"

import './errors.css'


const Errors = () => {

    const [errors, setErrors] = React.useState([])




    useEffect(()=>{

        const getErrors = async () => {
            const response = await axios.get('http://77.105.136.213:5000/logs/errors')

            setErrors(errors.push(response.data.message))
            setErrors(response.data.message)
            setErrors(errors[0])
            console.log(errors);


        }


        getErrors()

    }, [])



    return (
    <div className="errors_container">
        <div className="errors">
            {
                errors.map((error) => <Error key={error.id} props={error}/>)
            }
        </div>
    </div>
    )
}

export default Errors