import * as React from 'react';

import './keys.css'
import axios from 'axios';
import RequestKey from '../request_key/request_key';



const Keys = () => {
    const [keyOne, setKeyOne] = React.useState([])
    const [keyTwo, setKeyTwo] = React.useState([])

    const getKeys = async () => {
        const key1 = await axios.get('http://77.105.136.213:5000/keys/1')
        const key2 = await axios.get('http://77.105.136.213:5000/keys/2')
        console.log(key1)

        const key1Copy = key1.data.message
        const key2Copy = key2.data.message

        setKeyOne(key1Copy)
        setKeyTwo(key2Copy)
    }

    React.useEffect(() => {
        getKeys()
    }, [])


    return (
        <div>
            <div className="keys_container">

                <div className="key">
                    <h1 className="key_num">Ключ 1</h1> <br/>
                    <div>
                        {keyOne.map((el) => <RequestKey key={el.request} props={el}/>)}
                    </div>
                </div>

                <div className="key">
                    <h1 className="key_num">Ключ 2</h1> <br/>
                    <div>
                        {keyTwo.map((el) => <RequestKey key={el.request} props={el}/>)}
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Keys