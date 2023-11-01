import {useState, useEffect} from "react";

const GetData = () => {

    const [num, setNum] = useState(1)
    const [data, setData] = useState({})

    const  getInf = async () => {
        const url  = `https://rickandmortyapi.com/api/character/${num}`
        const resp = await fetch(url);
        const inf  = await resp.json();
        setData(inf );
    }
    
    useEffect(() => {
        getInf();
    }, [num]); 

    const handleSum = () => {
        setNum( num + 1 );
    }

    const handleRes = () => {
        setNum( num - 1 );
    }
    
    return {
        ...data,
        data,
        num,
        handleSum,
        handleRes
    }
}

export default GetData
