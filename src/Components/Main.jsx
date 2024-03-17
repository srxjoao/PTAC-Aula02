import { useState } from "react";

export default function Main(){

    const[name, setNome] = useState ("");
    
    return(
        <main>
            <input
            type="text"
            name=""
            id=""
            onChange={(event)=> setNome(event.target.value)}
            />
            {name}
            </main>
           
        
    );
}