import React from 'react'


export default function Tags({tags}){

    return(
        <>
            {tags?.map((data, index)=>
                <div key={index}>
                <p>#{data.tag}</p>   
                </div> 
            )} 
        </>
        
    )
}