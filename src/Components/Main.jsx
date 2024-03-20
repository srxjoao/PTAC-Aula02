import { useState } from "react";

export default function Main(){

    const[name, setNome] = useState ("");
    const [Tel, setTel] = useState ("");

    
    return(
        <main>
            <form>
            <input
                type="text"
                name=""
                id=""
                onChange={(event)=> setNome(event.target.value)}
            />

            <input
            type="tel"
            name=""
            id=""
            onChange={(event)=> setTel(event.target.value)}
            />
            {Tel}
            {name}
            </form>

            <button>
                Cadastrar Contato
            </button>

        </main>
           
        
    );
}