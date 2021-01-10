import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Pokemon({ url }) {
    const [name, setName] = useState()
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        axios.get(url).then(res => {
            setName(res.data.name)
            setImgUrl(res.data.sprites.front_default)
        })
        
        // return
    }, [])

    return (
        <div className="pokebox">
            <h2>{name}</h2>
            <img src={imgUrl} />
        </div>
    )
}
