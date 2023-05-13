import * as React from 'react';

import './keys.css'
import axios from 'axios';




const Keys = () => {

    const getKeys = async () => {
        const key1 = await axios.get('http://localhost:5000/keys/1')
        const key2 = await axios.get('http://localhost:5000/keys/2')
        console.log(key1)
        console.log(key2)
    }

    React.useEffect(() => {
        getKeys()
    }, [])


    return (
        <div>
            <div className="keys_container">

                <div className="key">
                    <h1>Ключ 1</h1> <br/>
                    контейнер 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eum, cum error laudantium expedita nemo repellendus illo sapiente aspernatur modi, quasi itaque consequuntur? Corrupti amet suscipit velit neque facilis atque?
                </div>

                <div className="key">
                    <h1>Ключ 2</h1> <br/>
                    контейнер 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eum, cum error laudantium expedita nemo repellendus illo sapiente aspernatur modi, quasi itaque consequuntur? Corrupti amet suscipit velit neque facilis atque?
                </div>

            </div>
        </div>
    )
}


export default Keys