import axios from "axios"
import React, { useState } from "react"
import Error from "../error/error"

import './errors.css'


const Errors = () => {

    const [errors, setErrors] = useState([])

    const getErrors = async () => {
        const response = await axios.get('http://localhost:5000/logs/errors')
        setErrors(response.data.message)
        console.log(errors);
    }

    React.useEffect(() => {
        getErrors()
    }, [])


    return (
    <div className="errors_container">
        <div className="errors">
            {
                errors.map((error) => <Error props={error}/>)
            }
        </div>
    </div>
    )
}

export default Errors