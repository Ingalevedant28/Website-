import React from "react";
import { useEffect,useState } from "react";

function GitHub(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Ingalevedant28')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    })
    return(
        <div>gitHub followers:{data.followers} </div>
    )
}

export default GitHub;
