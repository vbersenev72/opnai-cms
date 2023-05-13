import * as React from 'react';

import './keys.css'
import axios from 'axios';




const Keys = () => {
    const [keyOne, setKeyOne] = React.useState('')

    const getKeys = async () => {
        const key1 = await axios.get('http://localhost:5000/keys/1')
        console.log(key1)
        setKeyOne(key1.data.message)
    }

    React.useEffect(() => {
        getKeys()
    }, [getKeys])


    return (
        <div>
            <div className="keys_container">

                <div className="key">
                    <h1>Ключ 1</h1> <br/>
                    {keyOne.map}
                </div>

                <div className="key">
                    <h1>Ключ 2</h1> <br/>
                    
                </div>

            </div>
        </div>
    )
}


export default Keys